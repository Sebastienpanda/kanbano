import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-hero',
    imports: [],
    templateUrl: './hero.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements OnInit, OnDestroy {
    displayedText = signal('');
    scrollY = signal(0);
    statsAnimated = signal(false);
    stats = [
        { label: 'Utilisateurs actifs', target: 50000, suffix: 'K+', current: signal(0) },
        { label: 'Tâches accomplies', target: 2000000, suffix: 'M+', current: signal(0) },
        { label: 'Satisfaction Utilisateurs', target: 100, suffix: '%', current: signal(0) },
    ];

    private fullText = 'Transformez votre productivité avec FlowBoard';
    private typeIndex = 0;
    private typewriterFrame?: number;

    private statsObserver?: IntersectionObserver;

    ngOnInit() {
        this.runTypewriter();
        this.initStatsObserver();
    }

    ngOnDestroy() {
        cancelAnimationFrame(this.typewriterFrame!);
        this.statsObserver?.disconnect();
    }

    @HostListener('window:scroll')
    onScroll() {
        this.scrollY.set(window.scrollY);
    }

    getParallaxTransform(speed: number): string {
        return `translateY(${this.scrollY() * speed}px)`;
    }

    getParallaxOpacity(): number {
        return Math.max(0, 1 - this.scrollY() / 300);
    }

    getDisplayValue(stat: (typeof this.stats)[0]): string {
        const v = stat.current();
        switch (stat.suffix) {
            case 'K+':
                return `${(v / 1000).toFixed(0)}K+`;
            case 'M+':
                return `${(v / 1_000_000).toFixed(1)}M+`;
            case '%':
                return `${v.toFixed(1)}%`;
            default:
                return v.toFixed(0);
        }
    }

    scrollToSection(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    private runTypewriter() {
        const DELAY = 50;
        let lastTime = 0;

        const type = (now: number) => {
            if (now - lastTime >= DELAY) {
                this.displayedText.set(this.fullText.slice(0, this.typeIndex++));
                lastTime = now;
            }

            if (this.typeIndex <= this.fullText.length) {
                this.typewriterFrame = requestAnimationFrame(type);
            }
        };

        this.typewriterFrame = requestAnimationFrame(type);
    }

    private initStatsObserver() {
        this.statsObserver = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting) && !this.statsAnimated()) {
                this.statsAnimated.set(true);
                this.animateStats();
            }
        });

        requestAnimationFrame(() => {
            const el = document.querySelector('.stats-grid');
            if (el) this.statsObserver?.observe(el);
        });
    }

    private animateStats() {
        const DURATION = 2000;

        this.stats.forEach((stat) => {
            const start = performance.now();

            const animate = (now: number) => {
                const progress = Math.min((now - start) / DURATION, 1);
                const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
                stat.current.set(stat.target * ease);

                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        });
    }
}

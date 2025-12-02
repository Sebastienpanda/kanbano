import { Component, OnDestroy, OnInit, signal, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-hero',
    imports: [CommonModule],
    templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
    private platformId = inject(PLATFORM_ID);

    protected displayedText = signal('');
    protected scrollY = signal(0);
    protected stats = [
        { value: '50K+', label: 'Utilisateurs actifs', target: 50000, suffix: 'K+', current: signal(0) },
        { value: '2M+', label: 'Tâches accomplies', target: 2000000, suffix: 'M+', current: signal(0) },
        { value: '99.9%', label: 'Uptime garanti', target: 99.9, suffix: '%', current: signal(0) },
    ];
    protected statsAnimated = signal(false);
    private fullText = 'Transformez votre productivité avec FlowBoard';
    private currentIndex = 0;
    private typewriterInterval?: number;
    private scrollHandler?: () => void;
    private statsObserver?: IntersectionObserver;

    ngOnInit() {
        this.startTypewriter();
        this.initParallax();
        this.initStatsObserver();
    }

    ngOnDestroy() {
        if (this.typewriterInterval) {
            clearInterval(this.typewriterInterval);
        }
        if (this.scrollHandler && isPlatformBrowser(this.platformId)) {
            window.removeEventListener('scroll', this.scrollHandler);
        }
        if (this.statsObserver) {
            this.statsObserver.disconnect();
        }
    }

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    private startTypewriter() {
        this.typewriterInterval = window.setInterval(() => {
            if (this.currentIndex <= this.fullText.length) {
                this.displayedText.set(this.fullText.slice(0, this.currentIndex));
                this.currentIndex++;
            } else {
                if (this.typewriterInterval) {
                    clearInterval(this.typewriterInterval);
                }
            }
        }, 50);
    }

    private initParallax() {
        if (!isPlatformBrowser(this.platformId)) return;

        this.scrollHandler = () => {
            this.scrollY.set(window.scrollY);
        };

        window.addEventListener('scroll', this.scrollHandler, { passive: true });
    }

    getParallaxTransform(speed: number): string {
        const offset = this.scrollY() * speed;
        return `translate3d(0, ${offset}px, 0)`;
    }

    getParallaxOpacity(): number {
        const maxScroll = 300;
        const opacity = 1 - (this.scrollY() / maxScroll);
        return Math.max(0, Math.min(1, opacity));
    }

    private initStatsObserver() {
        if (!isPlatformBrowser(this.platformId)) return;

        this.statsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !this.statsAnimated()) {
                        this.statsAnimated.set(true);
                        this.animateStats();
                    }
                });
            },
            { threshold: 0.3 }
        );

        // Wait for next tick to ensure DOM is ready
        setTimeout(() => {
            const statsElement = document.querySelector('.stats-grid');
            if (statsElement) {
                this.statsObserver?.observe(statsElement);
            }
        }, 100);
    }

    private animateStats() {
        this.stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            const increment = stat.target / steps;
            let currentStep = 0;

            const interval = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const value = stat.target * easeOut;

                stat.current.set(value);

                if (currentStep >= steps) {
                    stat.current.set(stat.target);
                    clearInterval(interval);
                }
            }, stepDuration);
        });
    }

    getDisplayValue(stat: typeof this.stats[0]): string {
        const value = stat.current();
        if (stat.suffix === 'K+') {
            return `${(value / 1000).toFixed(0)}K+`;
        } else if (stat.suffix === 'M+') {
            return `${(value / 1000000).toFixed(1)}M+`;
        } else if (stat.suffix === '%') {
            return `${value.toFixed(1)}%`;
        }
        return value.toFixed(0);
    }
}

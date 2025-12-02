import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    imports: [CommonModule],
    templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
    protected displayedText = signal('');
    protected stats = [
        { value: '50K+', label: 'Utilisateurs actifs' },
        { value: '2M+', label: 'Tâches accomplies' },
        { value: '99.9%', label: 'Uptime garanti' },
    ];
    private fullText = 'Transformez votre productivité avec FlowBoard';
    private currentIndex = 0;
    private typewriterInterval?: number;

    ngOnInit() {
        this.startTypewriter();
    }

    ngOnDestroy() {
        if (this.typewriterInterval) {
            clearInterval(this.typewriterInterval);
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
}

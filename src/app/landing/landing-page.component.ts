import { Component, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './sections/hero.component';
import { FeaturesComponent } from './sections/features.component';
import { TestimonialsComponent } from './sections/testimonials.component';
import { PricingComponent } from './sections/pricing.component';
import { FaqComponent } from './sections/faq.component';
import { CtaComponent } from './sections/cta.component';
import { FooterComponent } from './sections/footer.component';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        FeaturesComponent,
        TestimonialsComponent,
        PricingComponent,
        FaqComponent,
        CtaComponent,
        FooterComponent,
    ],
    templateUrl: './landing-page.component.html',
    styles: `
        :host {
            display: block;
        }
    `,
})
export class LandingPageComponent implements OnInit {
    protected reducedMotion = signal(false);

    constructor() {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        this.reducedMotion.set(mediaQuery.matches);

        mediaQuery.addEventListener('change', (e) => {
            this.reducedMotion.set(e.matches);
        });

        effect(() => {
            if (this.reducedMotion()) {
                document.documentElement.classList.add('reduce-motion');
            } else {
                document.documentElement.classList.remove('reduce-motion');
            }
        });
    }

    ngOnInit() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

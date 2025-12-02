import { Component, effect, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './sections/hero.component';
import { FeaturesComponent } from './sections/features.component';
import { TestimonialsComponent } from './sections/testimonials.component';
import { PricingComponent } from './sections/pricing.component';
import { FaqComponent } from './sections/faq.component';
import { CtaComponent } from './sections/cta.component';
import { FooterComponent } from './sections/footer.component';
import { Theme } from '../shared/services/theme';
import { Demo } from './sections/demo/demo';
import { ToastContainer } from '../shared/toast/toast';
import { Toast } from '../shared/services/toast';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        Demo,
        TestimonialsComponent,
        PricingComponent,
        FaqComponent,
        CtaComponent,
        FooterComponent,
        ToastContainer,
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
    protected theme = inject(Theme);
    private toast = inject(Toast);

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

        // Show welcome toast
        setTimeout(() => {
            this.toast.success(
                'Bienvenue sur FlowBoard !',
                'Découvrez toutes nos fonctionnalités premium'
            );
        }, 1000);
    }
}

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Hero} from './sections/hero';
import {Features} from './sections/features';
import {TestimonialsComponent} from './sections/testimonials.component';
import {PricingComponent} from './sections/pricing.component';
import {FaqComponent} from './sections/faq.component';
import {CtaComponent} from './sections/cta.component';
import {FooterComponent} from './sections/footer.component';
import {Demo} from './sections/demo/demo';
import {ToastContainer} from '../shared/toast/toast';
import {Home} from './sections/header';

@Component({
    selector: 'app-landing-page',
    imports: [
        CommonModule,
        Hero,
        Demo,
        TestimonialsComponent,
        PricingComponent,
        FaqComponent,
        CtaComponent,
        FooterComponent,
        ToastContainer,
        Features,
        Home,
    ],
    templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
}

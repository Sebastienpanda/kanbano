import { Component } from '@angular/core';
import { Home } from '../shared/ui/header';
import { Cta } from './cta';
import { Demo } from './demo/demo';
import { Faq } from './faq';
import { Features } from './features';
import { Footer } from './footer';
import { Hero } from './hero';
import { Pricing } from './pricing';
import { Testimonials } from './testimonials';

@Component({
    selector: 'app-landing-page',
    imports: [Hero, Demo, Testimonials, Pricing, Faq, Cta, Footer, Features, Home],
    templateUrl: './landing-page.html',
})
export class LandingPage {}

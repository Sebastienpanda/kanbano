import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlan } from '../types/landing-page.types';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing.component.html',
})
export class PricingComponent {
    protected isAnnual = signal(false);

    protected plans = signal<PricingPlan[]>([
        {
            name: 'Free',
            price: 0,
            priceAnnual: 0,
            description: 'Parfait pour découvrir FlowBoard',
            features: [
                '3 boards maximum',
                '10 collaborateurs',
                'Templates de base',
                'Support par email',
                'Stockage 1GB',
                'Historique 30 jours',
            ],
            highlighted: false,
            cta: 'Commencer gratuitement',
        },
        {
            name: 'Pro',
            price: 19,
            priceAnnual: 15,
            description: 'Pour les équipes qui veulent scaler',
            features: [
                'Boards illimités',
                'Collaborateurs illimités',
                'Tous les templates premium',
                'Support prioritaire 24/7',
                'Stockage 100GB',
                'Historique illimité',
                'IA collaborative',
                'Intégrations avancées',
                'Analytics détaillés',
                'Automatisations custom',
            ],
            highlighted: true,
            cta: 'Essayer 14 jours gratuits',
            badge: '🔥 Most Popular',
        },
        {
            name: 'Enterprise',
            price: 49,
            priceAnnual: 39,
            description: 'Sécurité et contrôle maximum',
            features: [
                'Tout du plan Pro',
                'SSO & SAML',
                'Audit logs complets',
                'SLA 99.99%',
                'Support dédié',
                'Stockage illimité',
                'White-labeling',
                'API illimitée',
                'Déploiement on-premise',
                'Formation équipe incluse',
                'Account manager dédié',
            ],
            highlighted: false,
            cta: 'Contacter les ventes',
        },
    ]);

    toggleBilling() {
        this.isAnnual.update((value) => !value);
    }

    getPrice(plan: PricingPlan): number {
        return this.isAnnual() ? plan.priceAnnual : plan.price;
    }

    getSavings(plan: PricingPlan): number {
        if (plan.price === 0) return 0;
        return Math.round(((plan.price - plan.priceAnnual) / plan.price) * 100);
    }
}

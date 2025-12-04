import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.html',
})
export class Footer {
    protected currentYear = new Date().getFullYear();

    protected footerLinks = {
        product: [
            { label: 'Fonctionnalités', href: '#features' },
            { label: 'Tarifs', href: '#pricing' },
            { label: 'Démo', href: '#demo' },
            { label: 'Intégrations', href: '#' },
            { label: 'Changelog', href: '#' },
            { label: 'API', href: '#' },
        ],
        company: [
            { label: 'À propos', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Carrières', href: '#' },
            { label: 'Presse', href: '#' },
            { label: 'Partenaires', href: '#' },
        ],
        resources: [
            { label: 'Documentation', href: '#' },
            { label: 'Guides', href: '#' },
            { label: 'Tutoriels', href: '#' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Support', href: '#' },
            { label: 'Statut', href: '#' },
        ],
        legal: [
            { label: 'Confidentialité', href: '#' },
            { label: 'Conditions', href: '#' },
            { label: 'Sécurité', href: '#' },
            { label: 'GDPR', href: '#' },
        ],
    };

    protected socialLinks = [{ icon: 'linkedin', href: '#', label: 'LinkedIn' }];

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

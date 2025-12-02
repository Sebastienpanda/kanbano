import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Feature } from '../types/landing-page.types';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './features.component.html',
})
export class FeaturesComponent {
    constructor(private sanitizer: DomSanitizer) {}

    protected features = signal<Feature[]>([
        {
            icon: 'rocket',
            iconType: 'svg',
            title: 'Démarrage Ultra-Rapide',
            description: 'Créez votre premier board en moins de 30 secondes. Interface intuitive, zéro courbe d\'apprentissage.',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: 'ai',
            iconType: 'svg',
            title: 'IA Collaborative',
            description: 'Notre IA suggère des priorités, détecte les blocages et optimise votre workflow automatiquement.',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: 'lightning',
            iconType: 'svg',
            title: 'Performance Éclair',
            description: 'Synchronisation temps réel, même avec 10,000+ tâches. Infrastructure ultra-optimisée.',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: 'palette',
            iconType: 'svg',
            title: 'Personnalisation Infinie',
            description: 'Thèmes, templates, workflows custom. Votre Kanban s\'adapte à votre méthode, pas l\'inverse.',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: 'shield',
            iconType: 'svg',
            title: 'Sécurité Enterprise',
            description: 'Chiffrement E2E, SSO, audit logs, conformité GDPR. Vos données sont sacrées.',
            gradient: 'from-indigo-500 to-blue-500',
        },
        {
            icon: 'chart',
            iconType: 'svg',
            title: 'Analytics Avancés',
            description: 'Dashboards interactifs, prédictions de délais, insights actionnables. Pilotez avec data.',
            gradient: 'from-yellow-500 to-orange-500',
        },
        {
            icon: 'link',
            iconType: 'svg',
            title: 'Intégrations Natives',
            description: 'Slack, GitHub, Jira, Figma... Plus de 100 intégrations pour centraliser votre travail.',
            gradient: 'from-pink-500 to-rose-500',
        },
        {
            icon: 'globe',
            iconType: 'svg',
            title: 'Collaboration Globale',
            description: 'Support multilingue, fuseaux horaires auto, @mentions, commentaires riches.',
            gradient: 'from-teal-500 to-cyan-500',
        },
    ]);

    getIconSvg(iconName: string): SafeHtml {
        const icons: Record<string, string> = {
            rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
            ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path><path d="M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path></svg>',
            lightning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
            palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
            shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
            chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>',
            link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
            globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
        };
        return this.sanitizer.bypassSecurityTrustHtml(icons[iconName] || '');
    }
}

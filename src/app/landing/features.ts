import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ChartNoAxesColumn, LucideAngularModule, Palette, Rocket, Shield, Zap} from 'lucide-angular';
import {Feature} from './types/landing-page.types';

@Component({
    selector: 'app-features',
    imports: [LucideAngularModule],
    templateUrl: './features.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features {
    protected readonly features = signal<Feature[]>([
        {
            icon: Rocket,
            title: 'Démarrage Ultra-Rapide',
            description: 'Créez votre premier board en moins de 30 secondes. Interface intuitive, zéro courbe d\'apprentissage.',
        },
        {
            icon: Zap,
            title: 'Performance Éclair',
            description: 'Synchronisation temps réel, même avec 10,000+ tâches. Infrastructure ultra-optimisée.',
        },
        {
            icon: Palette,
            title: 'Personnalisation Infinie',
            description: 'Thèmes, templates, workflows custom. Votre Kanban s\'adapte à votre méthode, pas l\'inverse.',
        },
        {
            icon: Shield,
            title: 'Sécurité Enterprise',
            description: 'Chiffrement E2E, SSO, audit logs, conformité GDPR. Vos données sont sacrées.',
        },
        {
            icon: ChartNoAxesColumn,
            title: 'Analytics Avancés',
            description: 'Dashboards interactifs, prédictions de délais, insights actionnables. Pilotez avec data.',
        },
    ]);
}

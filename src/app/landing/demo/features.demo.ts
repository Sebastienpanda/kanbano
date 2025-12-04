import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Feature} from '../types/landing-page.types';
import {ChartColumnDecreasing, LucideAngularModule, Users, Zap} from 'lucide-angular';

type FeatureDemo = Partial<Feature> & {
    color: string;
};

@Component({
    selector: "app-features-demo",
    templateUrl: "./features.demo.html",
    imports: [
        LucideAngularModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesDemo {
    protected readonly features = signal<FeatureDemo[]>([
        {
            title: 'Drag & Drop intuitif',
            description: 'Déplacez vos tâches facilement entre les colonnes',
            icon: Zap,
            color: 'primary'
        },
        {
            title: 'Collaboration temps réel',
            description: 'Travaillez ensemble instantanément',
            icon: Users,
            color: 'secondary'
        },
        {
            title: 'Analytics avancés',
            description: 'Suivez la performance de votre équipe',
            icon: ChartColumnDecreasing,
            color: 'accent'
        }
    ]);
}

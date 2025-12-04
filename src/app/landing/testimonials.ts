import {Component, signal} from '@angular/core';
import {Testimonial} from './types/landing-page.types';
import {LucideAngularModule, Star} from 'lucide-angular';

@Component({
    selector: 'app-testimonials',
    imports: [LucideAngularModule],
    templateUrl: './testimonials.html',
})
export class Testimonials {
    protected testimonials = signal<Testimonial[]>([
        {
            name: 'Sarah Dubois',
            role: 'Product Manager',
            company: 'TechCorp',
            avatar: '/avatars/sarah-ubois.jpg',
            content:
                'FlowBoard a transformé notre façon de travailler. Nous avons gagné 40% de productivité en 3 mois. L\'interface est intuitive et les intégrations sont top !',
            rating: 5,
        },
        {
            name: 'Marc Lefebvre',
            role: 'CTO',
            company: 'StartupXYZ',
            avatar: '/avatars/marc-lefebvre.jpg',
            content:
                'Après avoir testé Trello, Asana, Monday... FlowBoard est de loin le meilleur. L\'IA qui suggère des priorités est bluffante. Notre équipe de 50 dev l\'adore.',
            rating: 5,
        },
        {
            name: 'Julie Martin',
            role: 'Lead Designer',
            company: 'CreativeStudio',
            avatar: '/avatars/julie.jpg',
            content:
                'Enfin un Kanban qui est beau ET performant ! Le dark mode est magnifique, la personnalisation infinie. Mes designers ne jurent que par ça maintenant.',
            rating: 5,
        },
        {
            name: 'Thomas Bernard',
            role: 'Founder & CEO',
            company: 'GrowthLab',
            avatar: '/avatars/homas-bernard.jpg',
            content:
                'ROI incroyable. En 6 mois, FlowBoard s\'est payé 10x. Support ultra-réactif, features régulières, sécurité enterprise. C\'est notre outil central.',
            rating: 5,
        },
    ]);
    protected readonly Star = Star;
}

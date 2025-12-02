import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../types/landing-page.types';

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
    protected testimonials = signal<Testimonial[]>([
        {
            name: 'Sarah Dubois',
            role: 'Product Manager',
            company: 'TechCorp',
            avatar: '👩‍💼',
            content:
                'FlowBoard a transformé notre façon de travailler. Nous avons gagné 40% de productivité en 3 mois. L\'interface est intuitive et les intégrations sont top !',
            rating: 5,
        },
        {
            name: 'Marc Lefebvre',
            role: 'CTO',
            company: 'StartupXYZ',
            avatar: '👨‍💻',
            content:
                'Après avoir testé Trello, Asana, Monday... FlowBoard est de loin le meilleur. L\'IA qui suggère des priorités est bluffante. Notre équipe de 50 dev l\'adore.',
            rating: 5,
        },
        {
            name: 'Julie Martin',
            role: 'Lead Designer',
            company: 'CreativeStudio',
            avatar: '👩‍🎨',
            content:
                'Enfin un Kanban qui est beau ET performant ! Le dark mode est magnifique, la personnalisation infinie. Mes designers ne jurent que par ça maintenant.',
            rating: 5,
        },
        {
            name: 'Thomas Bernard',
            role: 'Founder & CEO',
            company: 'GrowthLab',
            avatar: '👨‍💼',
            content:
                'ROI incroyable. En 6 mois, FlowBoard s\'est payé 10x. Support ultra-réactif, features régulières, sécurité enterprise. C\'est notre outil central.',
            rating: 5,
        },
    ]);
}

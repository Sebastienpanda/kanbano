import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface KanbanColumn {
    title: string;
    color: string;
    cards: KanbanCard[];
}

interface KanbanCard {
    title: string;
    tags: string[];
    priority: 'low' | 'medium' | 'high';
    avatar?: string;
}

@Component({
    selector: 'app-demo',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './demo.component.html',
})
export class DemoComponent {
    protected columns = signal<KanbanColumn[]>([
        {
            title: 'À faire',
            color: 'text-gray-500',
            cards: [
                {
                    title: 'Refonte du dashboard',
                    tags: ['Design', 'UI'],
                    priority: 'high',
                    avatar: '👤',
                },
                {
                    title: 'Documentation API',
                    tags: ['Docs'],
                    priority: 'medium',
                    avatar: '👨‍💻',
                },
            ],
        },
        {
            title: 'En cours',
            color: 'text-blue-500',
            cards: [
                {
                    title: 'Intégration Stripe',
                    tags: ['Backend', 'Payment'],
                    priority: 'high',
                    avatar: '👩‍💻',
                },
                {
                    title: 'Tests E2E',
                    tags: ['Testing', 'QA'],
                    priority: 'medium',
                    avatar: '🧑‍💻',
                },
            ],
        },
        {
            title: 'Review',
            color: 'text-yellow-500',
            cards: [
                {
                    title: 'Feature: Dark mode',
                    tags: ['Frontend'],
                    priority: 'low',
                    avatar: '👨‍🎨',
                },
            ],
        },
        {
            title: 'Terminé',
            color: 'text-green-500',
            cards: [
                {
                    title: 'Migration database',
                    tags: ['Backend', 'DevOps'],
                    priority: 'high',
                    avatar: '⚙️',
                },
                {
                    title: 'Setup CI/CD',
                    tags: ['DevOps'],
                    priority: 'medium',
                    avatar: '🚀',
                },
            ],
        },
    ]);

    getPriorityColor(priority: string): string {
        switch (priority) {
            case 'high':
                return 'bg-red-500';
            case 'medium':
                return 'bg-yellow-500';
            case 'low':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    }
}

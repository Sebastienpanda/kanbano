import { Component, signal } from '@angular/core';
import { FAQItem } from './types/landing-page.types';

@Component({
    selector: 'app-faq',
    imports: [],
    templateUrl: './faq.html',
})
export class Faq {
    protected openIndex = signal<number | null>(null);

    protected faqs = signal<FAQItem[]>([
        {
            question: 'Est-ce que FlowBoard est vraiment gratuit ?',
            answer: "Oui ! Notre plan Free est 100% gratuit, sans limite de temps. Vous pouvez créer jusqu'à 3 boards avec 10 collaborateurs. C'est parfait pour tester FlowBoard et voir si ça matche avec votre équipe. Pas de carte bancaire requise pour démarrer.",
        },
        {
            question: 'Puis-je changer de plan à tout moment ?',
            answer: "Absolument ! Vous pouvez upgrader, downgrader ou annuler votre abonnement à tout moment. Les changements sont effectifs immédiatement. Si vous downgrade, vous gardez l'accès Pro jusqu'à la fin de votre période de facturation.",
        },
        {
            question: "Comment fonctionne la période d'essai ?",
            answer: "Tous les plans payants incluent 14 jours d'essai gratuit. Pas de carte bancaire requise. Vous pouvez tester toutes les fonctionnalités premium sans engagement. Si vous n'êtes pas satisfait, annulez avant la fin de l'essai sans frais.",
        },
        {
            question: 'Mes données sont-elles sécurisées ?',
            answer: 'La sécurité est notre priorité #1. Nous utilisons un chiffrement AES-256 end-to-end, des backups quotidiens, une infrastructure hébergée en Europe (GDPR compliant), et des audits de sécurité réguliers. Pour les plans Enterprise, on propose du SSO, SAML, et des audit logs complets.',
        },
        {
            question: 'Puis-je importer mes données depuis Trello/Asana ?',
            answer: "Oui ! On a des importers one-click pour Trello, Asana, Monday, Jira, et Notion. L'import prend généralement moins de 5 minutes et préserve toute votre structure : boards, listes, cartes, commentaires, pièces jointes, et membres.",
        },
        {
            question: 'Combien de collaborateurs puis-je inviter ?',
            answer: 'Sur le plan Free : 10 collaborateurs. Sur les plans Pro et Enterprise : collaborateurs illimités. Pas de frais cachés par utilisateur supplémentaire. Vous payez un prix fixe par mois, peu importe la taille de votre équipe.',
        },
        {
            question: 'Proposez-vous des réductions pour les associations/écoles ?',
            answer: 'Oui ! Nous offrons 50% de réduction pour les associations à but non lucratif, les écoles, et les projets open-source. Contactez-nous à hello@flowboard.io avec une preuve de statut pour bénéficier de la réduction.',
        },
        {
            question: "Que se passe-t-il si j'annule mon abonnement ?",
            answer: "Vous gardez l'accès à toutes les fonctionnalités premium jusqu'à la fin de votre période de facturation. Après, votre compte bascule automatiquement sur le plan Free. Vos données sont conservées pendant 90 jours. Vous pouvez les exporter à tout moment.",
        },
    ]);

    toggle(index: number) {
        this.openIndex.update((current) => (current === index ? null : index));
    }

    isOpen(index: number): boolean {
        return this.openIndex() === index;
    }
}

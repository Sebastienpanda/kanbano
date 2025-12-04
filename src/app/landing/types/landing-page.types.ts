import {LucideIconData} from 'lucide-angular';

export type Testimonial = {
    name: string;
    role: string;
    company: string;
    avatar: string;
    content: string;
    rating: number;
}

export type Feature = {
    icon: LucideIconData;
    title: string;
    description: string;
}

export type PricingPlan = {
    name: string;
    price: number;
    priceAnnual: number;
    description: string;
    features: string[];
    highlighted: boolean;
    cta: string;
    badge?: string;
}

export type FAQItem = {
    question: string;
    answer: string;
}

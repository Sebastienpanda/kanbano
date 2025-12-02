export interface Feature {
    icon: string;
    iconType: 'svg';
    title: string;
    description: string;
    gradient: string;
}

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    avatar: string;
    content: string;
    rating: number;
}

export interface PricingPlan {
    name: string;
    price: number;
    priceAnnual: number;
    description: string;
    features: string[];
    highlighted: boolean;
    cta: string;
    badge?: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface Stat {
    value: string;
    label: string;
}

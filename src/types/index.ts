export interface Mentor {
    id: string;
    name: string;
    position: string;
    company: string;
    skills: string[];
    image: string;
    rating: number;
    experience: string[];
    reviews: Review[];
    services: Service[];
}

export interface Review {
    id: string;
    rating: number;
    comment: string;
    author: string;
    authorAvatar?: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    duration: string;
    price: number;
}

export interface SearchHistory {
    id: string;
    term: string;
}

export interface FilterOption {
    id: string;
    label: string;
    value: string;
    category: 'role' | 'company' | 'slot' | 'rating';
}
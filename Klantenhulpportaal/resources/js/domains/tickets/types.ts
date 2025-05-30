
type StatusValue = 'In afwachting' | 'In behandeling' | 'Afgehandeld';

export interface Ticket {
    id: number;
    user_id: number;
    admin_id: number;
    category_id: number;
    title: string;
    content: string;
    status: StatusValue;
    created_at: Date;
    updated_at: Date;
}
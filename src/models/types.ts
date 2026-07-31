

export type AvailabilityStatus = 'Available' | 'Working' | 'Open to opportunities';
export type modeStatus = 'Remote'|'Hybrid'|'On-site'
export type contractStatus = 'Full-time'|'Part-time'|'Practices'
export type categoryStatus = 'Networking'|'Workshop'|'Conference'
export type formatStatus = 'Online'|'On-site'

export interface Alumni {
    id: string;
    name: string;
    role: string;
    location: string;
    availability: AvailabilityStatus;
    stack: string[];
    imageUrl: string;
}

export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    mode: modeStatus;
    contract: contractStatus;
    stack: string[];
    published: string;
}

export interface Event{
    id: string;
    title: string;
    category: categoryStatus;
    date: string
    location: string;
    format: formatStatus;
    description: string;
}


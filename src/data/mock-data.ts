import type { Alumni} from '../models/types'
import type { Job} from '../models/types'
import type { Event} from '../models/types'

export const alumni: Alumni[] = [
    { id: 'a1', name: 'Anna Costa', role: 'Front-end Developer', location: 'Barcelona', availability: 'Available', stack: ['TypeScript', 'CSS'], imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80' },
    { id: 'a2', name: 'Jordi Serra', role: 'UX/UI Designer', location: 'Terrassa', availability: 'Working', stack: ['Figma', 'Research'], imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80' },
    { id: 'a3', name: 'Marta Vidal', role: 'Junior Web Developer', location: 'Girona', availability: 'Open to opportunities', stack: ['JavaScript', 'HTML'], imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80' },
    { id: 'a4', name: 'Alex Romero', role: 'Data Analyst', location: 'Barcelona', availability: 'Available', stack: ['Python', 'SQL'], imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80' },
    { id: 'a5', name: 'Laia Puig', role: 'Back-end Developer', location: 'Sabadell', availability: 'Working', stack: ['Node.js', 'SQL', 'NestJS','BackEnd'], imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80' },
    { id: 'a6', name: 'Nil Ferrer', role: 'QA Tester', location: 'Badalona', availability: 'Open to opportunities', stack: ['Testing', 'JavaScript'], imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&q=80' },
]

export const jobs: Job[] = [
    { id: 'j1', title: 'Junior Front-end Developer', company: 'Pixel Works', location: 'Barcelona', mode: 'Hybrid', contract: 'Full-time', stack: ['TypeScript', 'CSS'], published: '2 days ago' },
    { id: 'j2', title: 'UX/UI Designer', company: 'North Studio', location: 'Remote', mode: 'Remote', contract: 'Full-time', stack: ['Figma', 'Research'], published: '3 days ago' },
    { id: 'j3', title: 'Data Analyst', company: 'Data Loop', location: 'Barcelona', mode: 'On-site', contract: 'Full-time', stack: ['Python', 'SQL'], published: '5 days ago' },
    { id: 'j4', title: 'Web Development Intern', company: 'Form Lab', location: 'Lleida', mode: 'Hybrid', contract: 'Practices', stack: ['HTML', 'JavaScript'], published: '1 week ago' },
    { id: 'j5', title: 'QA Tester', company: 'Bright Path', location: 'Remote', mode: 'Remote', contract: 'Part-time', stack: ['Testing', 'JavaScript'], published: '1 week ago' },
    { id: 'j6', title: 'Back-end Developer', company: 'Cloud Seven', location: 'Barcelona', mode: 'Hybrid', contract: 'Full-time', stack: ['Node.js', 'SQL'], published: '2 weeks ago' },
]

export const events: Event[] = [
    { id: 'e1', title: 'Meet the IT-Alumni community', category: 'Networking', date: '12 September, 18:30', location: 'Barcelona Activa', format: 'On-site', description: 'An informal evening to meet alumni and share professional experiences.' },
    { id: 'e2', title: 'Build an accessible interface', category: 'Workshop', date: '18 September, 17:00', location: 'Online', format: 'Online', description: 'A practical introduction to semantic HTML, keyboard use and accessible forms.' },
    { id: 'e3', title: 'First job in technology', category: 'Conference', date: '25 September, 18:00', location: 'Barcelona Activa', format: 'On-site', description: 'Alumni share how they prepared their first applications and interviews.' },
    { id: 'e4', title: 'Portfolio review session', category: 'Workshop', date: '2 October, 16:30', location: 'Online', format: 'Online', description: 'Bring a project and receive structured feedback from the community.' },
]

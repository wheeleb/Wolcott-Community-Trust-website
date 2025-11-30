import { Event, Trustee } from './types';

export const ORGANIZATION_NAME = "Wolcott Community Trust";
export const CONTACT_EMAIL = "hello@wolcott-trust.org"; // Mock
export const CONTACT_PHONE = "(555) 123-4567";
export const CONTACT_ADDRESS = "123 Heritage Lane, Wolcott, VT 05680";

export const MOCK_TRUSTEES: Trustee[] = [
  { id: '1', name: 'Sarah Jenkins', role: 'Chairperson' },
  { id: '2', name: 'Marcus Thorne', role: 'Treasurer & Grants' },
  { id: '3', name: 'Elena Rodriguez', role: 'Community Outreach' },
  { id: '4', name: 'David Okafor', role: 'Secretary' },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Annual River Cleanup',
    date: '2024-10-15', // Past
    time: '09:00 AM - 12:00 PM',
    location: 'Wolcott River Park',
    description: 'Join neighbors to clear the riverbanks and enjoy a community BBQ afterwards.',
    fullDetails: 'The Annual River Cleanup is our longest-running tradition. Volunteers are provided with gloves, bags, and tools. We meet at the North Shelter. A BBQ lunch is provided for all volunteers at noon. Please wear sturdy boots.',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '5',
    title: 'Wolcott Community Trust meeting',
    date: '2025-11/30',
    time: '9:30 AM - 11:00 AM',
    location: 'Town Office Conference Room',
    description: 'Discuss the creation of an WCT website',
    fullDetails: 'Consider Google Sheets, AI Studio, and other possibilities',
    imageUrl: 'https://picsum.photos/800/400?random=5'
  },
  {
    id: '2',
    title: 'Town Hall: Future Projects',
    date: '2025-06-12', // Future (relative to now)
    time: '06:30 PM',
    location: 'Community Center Main Hall',
    description: 'An open forum to discuss the new park proposal and library renovation grants.',
    fullDetails: 'We want to hear from you! The Trust is considering two major capital projects for 2025: the expansion of Greenleaf Park and the modernization of the library roof. Come voice your opinion and vote on priorities.',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    title: 'Summer Solstice Picnic',
    date: '2025-06-21',
    time: '05:00 PM',
    location: 'Village Green',
    description: 'Music, food trucks, and games for the whole family.',
    fullDetails: 'Celebrate the longest day of the year with live folk music from local bands. Bring a blanket and a basket, or buy dinner from visiting food trucks. Sparklers at sunset!',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: '4',
    title: 'Autumn Harvest Festival',
    date: '2025-09-20',
    time: '10:00 AM',
    location: 'Wolcott Fairgrounds',
    description: 'Local produce, crafts, and the famous pumpkin carving contest.',
    fullDetails: 'Support our local farmers and artisans. Entry is free. The pumpkin carving contest starts at 1 PM with categories for kids and adults. Cider and donuts served all day.',
    imageUrl: 'https://picsum.photos/800/400?random=4'
  }
];

export const MOCK_ANNOUNCEMENT = {
  title: "New Grant Applications Open!",
  content: "We are now accepting applications for the Q3 Community Improvement Grants. Local non-profits and civic groups are encouraged to apply by August 1st.",
  link: "/contact"
};
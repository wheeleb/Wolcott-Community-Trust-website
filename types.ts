export interface Trustee {
  id: string;
  name: string;
  role: string;
  email?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string; // ISO String
  time: string;
  location: string;
  description: string;
  fullDetails: string;
  imageUrl?: string;
}

export enum EventFilter {
  UPCOMING = 'UPCOMING',
  PAST = 'PAST',
}

export interface FeedbackSubmission {
  name: string;
  type: 'General' | 'Website Issue' | 'Event Idea';
  message: string;
  rating: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}
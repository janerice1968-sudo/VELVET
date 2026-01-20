
export interface Model {
  id: string;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  isLive: boolean;
  viewerCount?: number;
  tags: string[];
}

export interface Testimonial {
  id: string;
  user: string;
  content: string;
  rating: number;
}

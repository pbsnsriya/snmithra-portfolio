export interface ServicePlan {
  title: string;
  description: string;
  features: string[];
  icon: string;
  type: 'contract' | 'subscription';
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Professional {
  id: string;
  name: string;
  specialty: string;
  location: string;
  price: number;
  duration: number;
  rating: number;
  reviews: number;
  image: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DaySchedule {
  date: Date;
  slots: TimeSlot[];
}
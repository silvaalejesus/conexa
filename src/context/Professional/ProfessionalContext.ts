import { createContext } from "react";

interface Professional {
  id: number;
  full_name: string;
  profession: string;
  price_per_minute: number;
  city_state: string;
  reviews: { author: string; rating: number; comment: string }[];
  photo: string;
  service_description: string;
  schedule: { date: string; slots: { time: string; available: boolean }[] }[];
}

interface ProfessionalContextProps {
  professionals: Professional[];
}

const ProfessionalContext = createContext<ProfessionalContextProps>({
  professionals: [],
});

export default ProfessionalContext;

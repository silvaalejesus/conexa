import { useEffect, useState } from "react";
import { Professional } from "../types";
import ProfessionalContext from "./ProfessionalContext";

interface ProfessionalProviderProps {
  children: React.ReactNode;
}

const ProfessionalProvider: React.FC<ProfessionalProviderProps> = ({
  children,
}) => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await fetch("http://localhost:3000/professionals");
        const data = await response.json();
        setProfessionals(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchProfessionals();
  }, []);

  return (
    <ProfessionalContext.Provider value={{ professionals }}>
      {children}
    </ProfessionalContext.Provider>
  );
};

export default ProfessionalProvider;

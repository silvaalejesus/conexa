import { Star } from "lucide-react";
import { useContext } from "react";
import ProfessionalContext from "../context/ProfessionalContext";

interface Props {
  professionalId: number;
}

export function ProfessionalCard({ professionalId }: Props) {
  const { professionals } = useContext(ProfessionalContext);

  const professional = professionals.find(
    (prof) => prof.id === Number(professionalId)
  );

  if (!professional) {
    return <div>Profissional não encontrado</div>;
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 flex gap-6">
        <img
          src={professional.photo}
          alt={professional.full_name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">
            {professional.full_name}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-blue-600 font-medium">
              {professional.profession}
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-600">
              {professional.city_state}
            </span>{" "}
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            {/* Calcula a média das avaliações */}
            <span className="text-gray-700">
              {professional.reviews.length > 0
                ? (
                    professional.reviews.reduce(
                      (sum, review) => sum + review.rating,
                      0
                    ) / professional.reviews.length
                  ).toFixed(1)
                : "N/A"}
            </span>
            <span className="text-gray-500">
              ({professional.reviews.length} reviews)
            </span>
          </div>
          <div className="mt-3 text-lg font-semibold text-gray-900">
            R$ {professional.price_per_minute}{" "}
            <span className="text-gray-500 text-base font-normal">
              / minuto
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{professional.service_description}</p>
    </>
  );
}

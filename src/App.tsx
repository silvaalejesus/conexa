import { Calendar } from "./components/Calendar";
import { ProfessionalCard } from "./components/ProfessionalCard";
import ProfessionalProvider from "./context/ProfessionalProvider";
import ScheduleProvider from "./context/ScheduleProvider";

function App() {
  return (
    <ScheduleProvider>
      <ProfessionalProvider>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <ProfessionalCard professionalId="2" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Calendar />
            </div>
          </div>
        </div>
      </ProfessionalProvider>
    </ScheduleProvider>
  );
}

export default App;

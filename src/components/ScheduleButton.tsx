import { useContext } from "react";
import ScheduleContext from "../context/ScheduleContext";
import { formatAppointmentMessage } from "../utils/formatAppointmentMessage";

const ScheduleButton = () => {
  const { selectedDate, selectedTime, onTimeSelect } =
    useContext(ScheduleContext);

  const appointmentValue = 250;

  const handleSchedule = () => {
    const selectedAppointment = onTimeSelect(
      selectedDate!,
      selectedTime!.time!
    );
    if (selectedAppointment) {
      const message = formatAppointmentMessage(
        selectedAppointment.date,
        selectedAppointment.time,
        appointmentValue
      );
      alert(message);
    } else {
      alert("Selecione uma data e hora para agendar.");
    }
  };

  return (
    <button
      onClick={handleSchedule}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
    >
      Agendar
    </button>
  );
};

export default ScheduleButton;

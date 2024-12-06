export function formatAppointmentMessage(
  date: Date,
  time: string,
  value: number
): string {
  const formattedDate = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `Agendamento realizado para ${formattedDate}, às ${time}, no valor de R$ ${value.toFixed(
    2
  )}.`;
}

import { parse, format, intervalToDuration } from "date-fns";

export function parseCompactDate(dateString: string): Date {
  return parse(dateString, "yyyyMMddHHmmss", new Date());
}

export function formatReadableDate(dateString: string): string {
  if (!dateString) return "-";
  const date = parseCompactDate(dateString);
  if (isNaN(date.getTime())) return "-";
  return format(date, "dd/MM/yyyy HH:mm:ss");
}

export function calculateDuration(
  startString: string,
  endString: string
): string {
  if (!startString || !endString) return "-";

  const start = parseCompactDate(startString);
  const end = parseCompactDate(endString);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) return "-";

  const duration = intervalToDuration({ start, end });

  const days = duration.days ?? 0;
  const hours = duration.hours ?? 0;
  const minutes = duration.minutes ?? 0;

  return `${days} dias, ${hours} horas, ${minutes} minutos`;
}

export function parseDate(str: string): Date {
  const [dia, mes, ano] = str.split("/");
  return new Date(Number(ano), Number(mes) - 1, Number(dia));
}

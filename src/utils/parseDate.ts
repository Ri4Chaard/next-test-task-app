export interface ParsedDate {
  day: string;
  date: number;
  month: string;
  year: number;
}

export function parseDate(dateInput: string | Date): ParsedDate {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  return {
    day,
    date: date.getDate(),
    month,
    year: date.getFullYear(),
  };
}

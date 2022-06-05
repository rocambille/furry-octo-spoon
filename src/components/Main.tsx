import { useData } from "../contexts/DataContext";

interface Props {
  className?: string;
}

const format = (date: Date): string => {
  const pad = (number: Number) => String(number).padStart(2, "0");

  return `${pad(date.getDate())} ${pad(date.getMonth() + 1)} ${
    date.getFullYear() % 100
  } à partir de ${pad(date.getHours())}h`;
};

function Main({ className = "" }: Props) {
  const { location, date } = useData();

  return (
    <main className={className}>
      Prochaine soirée le <time dateTime={`${date}`}>{format(date)}</time> à{" "}
      <a href={`https://www.google.fr/maps/place/${location.address}`}>
        {location.name}
      </a>
    </main>
  );
}

export default Main;

import { useData } from "../contexts/DataContext";

interface Props {
  className?: string;
}

const format = (date: Date) => {
  const pad = (number: Number) => String(number).padStart(2, "0");

  return (
    <time className="my-4" dateTime={`${date}`}>
      <span className="block sm:inline text-red-600 text-5xl">
        {pad(date.getDate())}
      </span>
      <span className="block sm:inline text-red-600 text-5xl sm:before:content-['/']">
        {pad(date.getMonth() + 1)}
      </span>
      <span className="block sm:inline text-5xl mb-4 sm:before:content-['/']">
        {pad(date.getFullYear() % 100)}
      </span>{" "}
      à partir de {pad(date.getHours())}h
    </time>
  );
};

function Main({ className = "" }: Props) {
  const { location, date } = useData();

  return (
    <main
      className={`flex flex-col sm:block justify-center items-center text-center p-4 bg-gray-900 text-red-100 text-2xl sm:text-5xl ${className}`}
    >
      Prochaine soirée le {format(date)}{" "}
      <span>
        à{" "}
        <a href={`https://www.google.fr/maps/place/${location.address}`}>
          {location.name}
        </a>
      </span>
    </main>
  );
}

export default Main;

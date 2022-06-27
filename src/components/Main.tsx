import { useData } from "../contexts/DataContext";

interface Props {
  className?: string;
}

const days = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

const format = (date: Date) => {
  const pad = (number: Number) => String(number).padStart(2, "0");

  return (
    <time
      className="my-4 grid grid-cols-3 items-center sm:inline"
      dateTime={`${date}`}
    >
      <span className="mr-2 text-right sm:hidden text-red-500">
        {days[date.getDay()]}
      </span>
      <span className="block sm:inline text-5xl">{pad(date.getDate())}</span>
      <span className="block sm:inline col-start-2 text-5xl sm:before:content-['/']">
        {pad(date.getMonth() + 1)}
      </span>
      <span className="ml-2 text-left sm:hidden text-red-500">
        {months[date.getMonth()]}
      </span>
      <span className="block sm:inline col-start-2 text-5xl mb-4 sm:before:content-['/']">
        {pad(date.getFullYear() % 100)}
      </span>
      <span className="row-start-4 col-span-full">
        {" "}
        à partir de {pad(date.getHours())}h
      </span>
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

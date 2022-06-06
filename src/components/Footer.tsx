import { useData } from "../contexts/DataContext";

interface Props {
  className?: string;
}

function Footer({ className = "" }: Props) {
  const { location, date, remainingPlaceCount, gameCount } = useData();

  return (
    <footer className={`flex flex-row ${className}`}>
      <div className="flex-1 flex flex-col justify-center items-stretch sm:items-center text-center bg-blue-500">
        <p className="p-4 sm:mb-4 sm:text-5xl font-bold text-white text-stroke-blue-900">
          {remainingPlaceCount} {remainingPlaceCount > 1 ? "places" : "place"}
        </p>
        <a
          className="p-4 font-semibold sm:rounded-md border border-slate-200 text-slate-900 bg-white"
          href="#"
        >
          je viens
        </a>
      </div>
      <div className="flex-1 flex flex-col justify-center items-stretch sm:items-center text-center bg-green-500">
        <p className="p-4 sm:mb-4 sm:text-5xl font-bold text-white text-stroke-green-900">
          {gameCount} {gameCount > 1 ? "jeux" : "jeu"}
        </p>
        <a
          className="p-4 font-semibold sm:rounded-md border border-slate-200 text-slate-900 bg-white"
          href="#"
        >
          je choisis
        </a>
      </div>
    </footer>
  );
}

export default Footer;

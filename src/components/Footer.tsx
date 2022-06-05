import { useData } from "../contexts/DataContext";

interface Props {
  className?: string;
}

function Footer({ className = "" }: Props) {
  const { location, date, remainingPlaceCount, gameCount } = useData();

  return (
    <footer className={`flex flex-row ${className}`}>
      <div className="flex-1 flex flex-col justify-center items-stretch sm:items-center text-center">
        {remainingPlaceCount}{" "}
        {remainingPlaceCount > 1 ? "places restantes" : "place restante"}
        <a href="#">je viens</a>
      </div>
      <div className="flex-1 flex flex-col justify-center items-stretch sm:items-center text-center">
        {gameCount} {gameCount > 1 ? "jeux proposés" : "jeu proposé"}
        <a href="#">je choisis</a>
      </div>
    </footer>
  );
}

export default Footer;

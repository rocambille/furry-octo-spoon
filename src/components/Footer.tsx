import { useData } from "../contexts/DataContext";

function Footer() {
  const { location, date, remainingPlaceCount, gameCount } = useData();

  return (
    <footer>
      <div>
        {remainingPlaceCount}{" "}
        {remainingPlaceCount > 1 ? "places restantes" : "place restante"}
        <a href="#">je viens</a>
      </div>
      <div>
        {gameCount} {gameCount > 1 ? "jeux proposés" : "jeu proposé"}
        <a href="#">je choisis</a>
      </div>
    </footer>
  );
}

export default Footer;

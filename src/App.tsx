import { useData } from "./contexts/DataContext";
import "./App.css";

const format = (date: Date): string => {
  const pad = (number: Number) => String(number).padStart(2, "0");

  return `${pad(date.getDate())} ${pad(date.getMonth() + 1)} ${
    date.getFullYear() % 100
  } à partir de ${pad(date.getHours())}h`;
};

function App() {
  const { location, date, remainingPlaceCount, gameCount } = useData();

  return (
    <>
      <header>
        <h1>TL</h1>
        <details>
          <summary>?</summary>
          <p>Lorem ipsum.</p>
        </details>
      </header>
      <main>
        Prochaine soirée le <time dateTime={`${date}`}>{format(date)}</time> à{" "}
        <a href={`https://www.google.fr/maps/place/${location.address}`}>
          {location.name}
        </a>
      </main>
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
    </>
  );
}

export default App;

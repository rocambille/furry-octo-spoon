import { useData } from "../contexts/DataContext";
import CTA from "./CTA";

interface Props {
  className?: string;
}

function Footer({ className = "" }: Props) {
  const { remainingPlaceCount, gameCount } = useData();

  return (
    <footer className={`flex flex-row ${className}`}>
      <CTA className="flex-1 bg-blue-500">
        <CTA.Text className="text-stroke-blue-900">
          {remainingPlaceCount} {remainingPlaceCount > 1 ? "places" : "place"}
        </CTA.Text>
        <CTA.Link href="#">je viens</CTA.Link>
      </CTA>
      <CTA className="flex-1 bg-green-500">
        <CTA.Text className="text-stroke-green-900">
          {gameCount} {gameCount > 1 ? "jeux" : "jeu"}
        </CTA.Text>
        <CTA.Link href="#">je choisis</CTA.Link>
      </CTA>
    </footer>
  );
}

export default Footer;

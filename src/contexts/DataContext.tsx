import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import { useCSV, useUrls } from "../services";

interface Value {
  location: {
    name: string;
    address: string;
  };
  date: Date;
  gameCount: number;
  remainingPlaceCount: number;
}

interface Props {
  children: ReactNode;
}

const dataContext: React.Context<Value> = createContext({
  location: {
    name: "la maison",
    address: "chez moi",
  },
  date: new Date("1970-01-01T18:00"),
  gameCount: 0,
  remainingPlaceCount: 0,
});

export function DataProvider({ children }: Props) {
  const { dataUrl } = useUrls();
  const data = useCSV(dataUrl);

  const { Provider } = dataContext;

  return <Provider value={data}>{children}</Provider>;
}

export const useData = () => useContext(dataContext);

import { createContext, useContext, ReactNode } from "react";

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
  const { Provider } = dataContext;

  return (
    <Provider
      value={{
        location: {
          name: "QL",
          address: "6 Rue de Saint-Brice, 51100 Reims",
        },
        date: new Date("1970-01-01T18:00"),
        gameCount: 0,
        remainingPlaceCount: 0,
      }}
    >
      {children}
    </Provider>
  );
}

export const useData = () => useContext(dataContext);

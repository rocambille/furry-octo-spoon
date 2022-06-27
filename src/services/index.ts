import { useEffect, useState } from "react";
import Papa from "papaparse";

const extract = (line: Array<string>) => {
  switch (line[0]) {
    case "date":
      return new Date(line[1]);
    case "location":
      return {
        name: line[1],
        address: line[2],
      };
    default:
      return line[1];
  }
};

export function useCSV(uri: string) {
  const [data, setData] = useState({
    date: new Date("1970-01-01T18:00"),
    location: {
      name: "QL",
      address: "6 Rue de Saint-Brice, 51100 Reims",
    },
    gameCount: 0,
    remainingPlaceCount: 0,
  });

  useEffect(() => {
    Papa.parse(uri, {
      download: true,
      complete: (csv) => {
        const incomingData = csv.data.reduce(
          (bag: Object, line: any) => ({ ...bag, [line[0]]: extract(line) }),
          {}
        );

        setData(incomingData as any);
      },
    });
  }, [uri]);

  return data;
}

export function useUrls() {
  return {
    reservePlaceUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeea0f0E5rxMqN1aschwyLqSEq6eR9yXt3f3U9tv9F65jZNVQ/viewform?usp=sf_link",
    pickGameUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScOh-GqYR8a3of1U9yDfD-nfQ_ay-YVTrMzyw7DqCvPikKtjg/viewform?usp=sf_link",
    dataUrl:
      "https://docs.google.com/spreadsheets/d/10JwB2c6khZ5TShSyqmV5M8bQrG0qbG0obpwDkwo2weM/export?exportFormat=csv&format=csv#gid=0",
  };
}

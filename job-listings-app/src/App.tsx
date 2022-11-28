import "./App.css";
import { Listing } from "./Listing";
import { useState, useCallback, useEffect } from "react";
import data from "./assets/data.json";

function App() {
  const [listings, setlistings] = useState(data);
  const [filters, setfilters] = useState([]);

  const handleChange = (newValue: string) => {
    if (!filters.includes(newValue)) {
      setfilters((prev) => {
        return [...prev, newValue];
      });
    }
  };

  useEffect(() => {
    setlistings((prev: any) => {
      let temp: Array<string> = [];
      prev.forEach((element) => {
        element.filters = [...element.tools, ...element.languages];
        temp.push(element);
      });

      return [...temp];
    });
  }, [0]);

  return filters.length == 0 ? (
    <div className="App">
      {listings.map((listing: any) => (
        <Listing key={listing.id} data={listing} stateChanger={handleChange} />
      ))}
    </div>
  ) : (
    <div className="App">
      {listings
        .filter((listing) =>
          listing.filters.some((filter: string) => filters.includes(filter))
        )
        .map((listing: any) => (
          <Listing
            data={listing}
            key={listing.id}
            stateChanger={handleChange}
          />
        ))}
    </div>
  );
}

export default App;

import "./App.css";
import { Listing } from "../Listing/Listing";
import { useState, useEffect } from "react";
import data from "../assets/data.json";
import { Filter } from "../Filter/Filter";
import { ListingInterface } from "../types";

function App() {
  const [listings, setlistings] = useState<any | null>(data);
  const [filters, setfilters] = useState<string[]>([]);

  const handleChange = (newValue: never) => {
    if (!filters.includes(newValue)) {
      setfilters((prev) => {
        return [...prev, newValue];
      });
    }
  };

  const removeFilter = (filterRem: any) => {
    setfilters((prev) => {
      return prev.filter((filter) => filter !== filterRem?.target?.id);
    });
  };

  const clearFilter = () => {
    setfilters([]);
  };

  useEffect(() => {
    setlistings((prev: string[]) => {
      let temp: string[] = [];
      prev.forEach((element: any) => {
        element.filters = [...element.tools, ...element.languages];
        temp.push(element);
      });

      return [...temp];
    });
  }, [0]);

  return filters.length == 0 ? (
    <div className="AppNoFilter">
      {listings.map((listing: ListingInterface) => (
        <Listing key={listing.id} data={listing} stateChanger={handleChange} />
      ))}
    </div>
  ) : (
    <div className="App">
      <Filter
        filters={filters}
        removeFilter={removeFilter}
        clearFilters={clearFilter}
      ></Filter>
      {listings
        .filter((listing: ListingInterface) =>
          listing?.filters?.some((filter: string) => filters.includes(filter))
        )
        .map((listing: ListingInterface) => (
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

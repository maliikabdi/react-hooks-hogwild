import React, { useState } from "react";
import hogs from "../porkers_data";
import Nav from "./Nav";
import HogTile from "./HogTile";
import FilterSort from "./FilterSort";
import AddHogForm from "./AddHogForm";


function App() {
  const [hogsData, setHogsData] = useState(hogs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortOption, setSortOption] = useState("name");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  // Function to hide hogs
  const handleHideHog = (name) => {
    setHiddenHogs((prevHidden) => [...prevHidden, name]);
  };

  // Function to add a new hog
  const handleAddHog = (newHog) => {
    setHogsData((prevHogs) => [...prevHogs, newHog]);
  };

  // Filter and sort hogs based on user preferences
  const filteredHogs = hogsData
    .filter((hog) => !filterGreased || hog.greased)
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      <FilterSort
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <AddHogForm onAddHog={handleAddHog} />
      <div className="ui grid container">
        {filteredHogs.map((hog, index) => (
          <HogTile key={index} hog={hog} onHide={handleHideHog} />
        ))}
      </div>
    </div>
  );
}

export default App;
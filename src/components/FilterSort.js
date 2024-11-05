import React from 'react';

function Filter({ filterGreased, setFilterGreased, sortOption, setSortOption }) {
  return (
    <div>
      <label>
        Greased Only
        <input
          type="checkbox"
          checked={filterGreased}
          onChange={(e) => setFilterGreased(e.target.checked)}
        />
      </label>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
}

export default Filter;

import React, { useState } from 'react';
import SearchResult from '../SearchResult/SearchResult'
import './DataSearch.css'
// Import the data from data.js
import data from './data'

// Define the DataSearch component
export default function DataSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle input change event
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the data based on the search term
  const filteredData = data.filter((item) =>
  Object.values(item).some((value) =>
  value.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h2>Search Data</h2>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <div className='foundData'>
      <SearchResult data={filteredData}/>
    </div>
    </div>
  );
}


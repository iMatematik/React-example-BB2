import React, { useState } from 'react';
import PetsGraph from '../PetsGraph/PetsGraph';
import data from './data';

export default function GroupPets() {
  const [showGraph, setShowGraph] = useState(false);

  const handleDisplayGraph = () => {
    setShowGraph(!showGraph);
  };

  const pets = data.map(item => item.pets);

  const petCounts = pets.reduce((counts, pet) => {
    counts[pet] = (counts[pet] || 0) + 1;
    return counts;
  }, {});

  const petTypes = Object.keys(petCounts);
  const petTypeCounts = Object.values(petCounts);

  return (
    <>
      <h2>Pet Types</h2>
      <ul>
        {petTypes.map((petType, index) => (
          <li key={index}>
            {petType}: {petTypeCounts[index]}
          </li>
        ))}
      </ul>
      <button onClick={handleDisplayGraph}>
        {showGraph ? 'Hide Graph' : 'Display Graph'}
      </button>
      {showGraph && <PetsGraph petCounts={petCounts} />}
    </>
  );
}
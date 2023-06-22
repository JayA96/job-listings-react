import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import Header from './components/Header/Header';
import Listings from './components/Listings/Listings';

function App() {

  const [filters, setFilters] = useState([]);
  const [listings, setListings] = useState([]);
  
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch('assets/data.json');
        const jsonData = await res.json();
        filters ?
        setListings(jsonData.filter(obj => filters.every(filter =>
          Object.values(obj).some(value =>
            value.toString().includes(filter)
          )
        ))) : 
        setListings(jsonData);
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchListings();
  }, [filters]);

  function addFilter(filter) {
    if (!filters.includes(filter)) {
      setFilters(current => [...current, filter]);
    }
  }
  
  function removeFilter(filter) {
    setFilters(current => current.filter((el) => el !== filter))
  }

  function clearFilters() {
    setFilters([]);
  }

  return (
    <main className='container'>
      <Header filters={filters} removeFilter={removeFilter} clearFilters={clearFilters}/>
      <Listings listings={listings} addFilter={addFilter}/>
    </main>
  )
}

export default App;

import React from 'react';
import './filters.scss';
import Filter from './Filter';

export default function Filters(props) {

  const filters = props.filters;
  const clearFilters = props.clearFilters;
  
  return (
    <section className='filters'>
      <div className="filters__left">
        {filters.map((filter, index) => <Filter key={index} filter={filter} removeFilter={props.removeFilter}/>)}
      </div>
      <div className="filters__right" onClick={() => clearFilters()}>
        <h3 className="heading-3">Clear</h3>
      </div>
    </section>
  )
}

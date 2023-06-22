import React from 'react';
import './header.scss';
import Filters from './Filters/Filters';

export default function Header(props) {

  const filters = props.filters;

  if (filters.length > 0) {
    return (
      <header className="header">
        <Filters filters={filters} removeFilter={props.removeFilter} clearFilters={props.clearFilters}/>
      </header>
    )
  } else {
    return (
      <header className="header">
      </header>
    )
  }

}

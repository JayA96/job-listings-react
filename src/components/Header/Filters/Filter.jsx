import React from 'react';
import './filter.scss';

export default function Filter(props) {

  const filter = props.filter;
  const removeFilter = props.removeFilter;

  return (
    <div className='filter'>
      <h2 className="heading-2">{filter}</h2>
      <div className="filter__remove" onClick={() => removeFilter(filter)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" /></svg>
      </div>
    </div>
  )
}

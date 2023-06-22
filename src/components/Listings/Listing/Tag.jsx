import React from 'react';
import './tag.scss'

export default function Tag(props) {

  const tag = props.tag;
  const addFilter = props.addFilter;

  return (
    <div className='tag' onClick={() => addFilter(tag)}>
      <h2 className="heading-2">{tag}</h2>
    </div>
  )
}

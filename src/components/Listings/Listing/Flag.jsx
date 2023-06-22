import React from 'react';
import './flag.scss';

export default function Flag({ type }) {

  const bgColor = type === 'new!' ? 'hsl(180, 29%, 50%)' : 'hsl(180, 14%, 20%)';
  const style = {
    backgroundColor: bgColor
  };

  return (
    <div className="flag" style={style}>
        <h2 className='heading-2'>{type}</h2>
    </div>
  )
}

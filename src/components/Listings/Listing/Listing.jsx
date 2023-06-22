import React from 'react';
import './listing.scss';
import Tag from './Tag';
import Flag from './Flag';

export default function Listing(props) {

  const listing = props.listing;
  const tags = [].concat(listing.role, listing.level, listing.languages, listing.tools);
  const svgUrl = '../../../../src/assets' + listing.logo.substring(1);

  return (
    <div className="listing">
      {listing.featured && <div className="listing__marker"></div>}
      <div className="listing__icon">
        <img src={svgUrl} alt="logo" />
      </div>
      <div className="listing__top-row">
        <div className="listing__company"><h2 className="heading-2">{listing.company}</h2></div>
        <div className="listing__featured">
        {listing.new && <Flag type='new!'/>}
        {listing.featured && <Flag type='featured'/>}
        </div>
      </div>
      <div className="listing__role"><h1 className="heading-1">{listing.position}</h1></div>
      <div className="listing__info">
        <div className="listing__info--posted"><h3 className="heading-3">{listing.postedAt}</h3></div>
        <div className='heading-3'>&middot;</div>
        <div className="listing__info--type"><h3 className="heading-3">{listing.contract}</h3></div>
        <div className='heading-3'>&middot;</div>
        <div className="listing__info--location"><h3 className="heading-3">{listing.location}</h3></div>
      </div>
      <hr className="listing__rule" />
      <div className="listing__tags">
        {tags.map((tag, index) => <Tag key={index} tag={tag} addFilter={props.addFilter}/>)}
      </div>
    </div>

  )
}

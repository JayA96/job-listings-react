import React, { useEffect, useState } from 'react';
import './listings.scss'
import Listing from './Listing/Listing';

export default function Listings(props) {

  const listings = props.listings;

  if (listings.length > 0) {
    return (
      <section className="listings">
        {listings.map(listing => <Listing key={listing.id} listing={listing} addFilter={props.addFilter}/>)}
      </section>
    )
  } else {
    return (
      <section className="listings">
      </section>
    )
  }


}

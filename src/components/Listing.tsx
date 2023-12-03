import React, { FC } from 'react';
import ListItem from './ListItem';

interface ListItem {
  listing_id: number;
}

interface ListingProps {
  items: ListItem[];
}

const Listing: FC<ListingProps> = (props) => {
  const { items } = props;

  return (
    <ul className='item-list'>
      {items.map((item) => <ListItem key={item.listing_id} item={item} />)}
    </ul>
  )
}

export default Listing;
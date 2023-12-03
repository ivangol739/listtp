import React from 'react';
import ListItem, { Item } from './ListItem';


export interface ListingProps {
  items: Item[];
}

const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
      <ul className='item-list'>
          {items.map((item, index) => (
              <ListItem key={index} item={item} />
          ))}
      </ul>
  );
}

export default Listing;
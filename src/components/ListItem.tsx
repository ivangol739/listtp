import React from 'react';

export interface Item {
  url: string;
  MainImage: {
      url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  state: string;
}


const ListItem: React.FC<{ item: Item }> = ({ item }) => {
  const { url, MainImage, title, currency_code, price, quantity, state } = item;

  if (state !== 'active') {
      return null;
  }

    let name;
  if (item.title !== undefined) {
    name = item.title.length > 50 ? `${item.title.slice(0, 50)}...` : title;
  } else {
    name = ''
  }


    // const name = title.length > 50 ? `${title.slice(0, 50)}...` : title;

  let pricetag: string;
  let colorclass: string;

  if (currency_code === 'USD') {
      pricetag = `$${price}`;
  } else if (currency_code === 'EUR') {
      pricetag = `€${price}`;
  } else {
      pricetag = `${price} ${currency_code}`;
  }

  if (quantity <= 10) {
      colorclass = 'level-low';
  } else if (quantity <= 20) {
      colorclass = 'level-medium';
  } else {
      colorclass = 'level-high';
  }

  return (
      <div className='item'>
          <div className='item-image'>
              <a href={url}>
                  <img src={MainImage?.url_570xN} alt={title}></img>
              </a>
          </div>
          <div className='item-details'>
              <p className='item-title'>{name}</p>
              <p className='item-price'>{pricetag}</p>
              <p className={`item-quantity ${colorclass}`}>{quantity} left</p>
          </div>
      </div>
  );
};

export default ListItem
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ItemList } from '../../../components';

const itemClick = item => {
  console.log('itemClicked.......', item);
};
const addToCartClick = details => {
  console.log('addToCartClicked.......', details);
};
const details = {
  title: 'Product 1',
  price: '100',
  currency: '$',
  imgsrc: 'https://picsum.photos/200/300',
  desc: 'test ',
  status: 'new',
  quantity: 100,
  thumbimgsrc: 'https://picsum.photos/200/300',
  imggallery: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300']
};

const starRating = {
  starCount: 5,
  name: 'product-rating',
  value: 4.5,
  starColor: '#ffb400',
  emptyStarColor: '#333'
};
const itemList = [
  {
    itemDetails: details,
    itemRating: starRating
  },
  {
    itemDetails: {
      title: 'Product 2',
      price: '100',
      currency: '$',
      imgsrc: 'https://picsum.photos/200/300',
      desc: 'test ',
      status: 'new',
      quantity: 100,
      thumbimgsrc: 'https://picsum.photos/200/300',
      imggallery: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ]
    },
    itemRating: {
      starCount: 5,
      name: 'product-rating',
      value: 3.5,
      starColor: '#ffb400',
      emptyStarColor: '#333'
    }
  },
  {
    itemDetails: {
      title: 'Product 3',
      price: '150',
      currency: '$',
      imgsrc: 'https://picsum.photos/200/300',
      desc: 'test ',
      status: 'new',
      quantity: 100,
      thumbimgsrc: 'https://picsum.photos/200/300',
      imggallery: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ]
    },
    itemRating: {
      starCount: 5,
      name: 'product-rating',
      value: 1.5,
      starColor: '#ffb400',
      emptyStarColor: '#333'
    }
  }
];

storiesOf('ItemList', module).addWithJSX('default', () => (
  <ItemList
    itemList={itemList}
    btnTransparent={true}
    btnReverse={false}
    btnPalette="success"
    itemClick={itemClick}
    addToCartClick={addToCartClick}
  />
));

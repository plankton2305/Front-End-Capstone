import { useEffect, useState } from 'react';
import React from 'react';
const Products = require('../../api/products.js');
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Compare from './Compare.jsx';
import axios from 'axios';
import { saveToCloset, getFromCloset, removeFromCloset } from './accessYourCloset.js';

const FavCards = ({ favProduct, setProductId, productId }) => {
  const unfill = "btn btn-circle";
  const fill = "btn btn-circle btn-error";

  const [remove, setRemove] = useState(unfill);

  console.log('FAV PRODUCT', favProduct);


  const removeFav = () => {
    if (remove === unfill) {
      removeFromCloset(favProduct.product.id);
      setRemove(fill);
    } else {
      saveToCloset(favProduct);
      setRemove(unfill);
    }
  };

  const selectNewProduct = () => {
    setProductId(favProduct.product.id);
  };

  return !(favProduct.product.id === productId) ? (
    <React.Fragment>
      <div className="carousel-item">
        <Card className="mt-6 w-96 overflow-hidden rounded-lg">
          <CardHeader color="blue-gray" className="relative h-56 mt-5">
            {favProduct.styles && favProduct.styles.photos && favProduct.styles.photos[0].url ? (
              <div className='relative'>
                <img
                  className='w-full'
                  src={favProduct.styles.photos[0].url}
                  alt={"Product Preview"}
                  layout={"fill"}
                  className={"h-full w-full object-cover"}
                  onClick={selectNewProduct}
                />
              </div>
            ) : (
              <div className='realtive'>
                <img
                  className='w-full'
                  src='../../_docs/default_pic.png'
                  alt={"Product Preview"}
                  layout={"fill"}
                  className={"h-full w-full object-cover"}
                  onClick={selectNewProduct}
                />
              </div>
            )}
            <div className='absolute top-0 right-0 m-2'>
              <button className={remove} onClick={removeFav}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <span className="badge">{favProduct.product.category}</span>
            <Typography variant="h5" color="blue-gray" className="mb-2" onClick={selectNewProduct}>
              {favProduct.product.name}
            </Typography>
            <Typography>
              {favProduct.styles && favProduct.styles.sale_price ? (
                <span className='sale-price'>
                  <s>${favProduct.product.default_price} </s>
                  ${favProduct.styles.sale_price}
                </span>
              ) : (
                <span className='original-price'>${favProduct.product.default_price}</span>
              )}
            </Typography>
            <Typography>
              ☆☆☆☆☆
            </Typography>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  ) : null;
};

export default FavCards;
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
import CardImgSlider from './CardImgSlider.jsx';

const FavCards = ({ favProduct, setProductId, productId, setUpdateSaved }) => {
  // const unfill = "btn btn-circle";
  // const fill = "btn btn-circle btn-error";

  // console.log('FAV PRODUCT', favProduct);

  const removeFav = () => {
    removeFromCloset(favProduct.product.id);
    setUpdateSaved(Date.now());
  };

  const selectNewProduct = () => {
    setProductId(favProduct.product.id);
  };

  return !(favProduct.product.id === productId) ? (
    <React.Fragment>
      <div className="carousel-item ml-5 mb-3">
        <Card className="mt-3 w-96 overflow-hidden rounded-lg">
          <CardHeader color="blue-gray" className="relative h-60 mt-3">
            {favProduct.styles && favProduct.styles.photos && favProduct.styles.photos[0].url ? (
              <CardImgSlider product={favProduct} selectNewProduct={selectNewProduct} />
            ) : (
              <div className='realtive'>
                <img
                  src='default_pic.png'
                  alt={"Product Preview"}
                  layout={"fill"}
                  className={"h-full w-full object-cover"}
                  onClick={selectNewProduct}
                />
              </div>
            )}
            <div className='absolute top-0 right-0 m-2'>
              <button className='btn btn-circle' onClick={removeFav}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <span className="badge bg-[#455f68] opacity-90 text-white">{favProduct.product.category}</span>
            <Typography variant="h5" color="blue-gray" className="mb-2" onClick={selectNewProduct}>
              {favProduct.product.name}
            </Typography>
            <Typography>
              {favProduct.styles && favProduct.styles.sale_price ? (
                <span className='sale-price'>
                  <s>${favProduct.product.default_price} </s>
                  <span className='text-red'>${favProduct.styles.sale_price}</span>
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
const {useEffect, useState} = require('react');
import React from 'react';
const Products = require('../../api/products.js');
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";


const RelatedCards = ({product}) => {

  return (
    <React.Fragment>
      <div class="carousel-item">
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          {product.styles && product.styles.photos && product.styles.photos[0].url ? (
            <img
              src={product.styles.photos[0].url}
              alt={"Product Preview"}
              layout={"fill"}
              className={"h-full w-full object-cover"}
              />
              ) : (
                <img
                  src='https://lh6.googleusercontent.com/K_LvL2XGZdOhq7m-xM6eywUFwM0mLNeE22p05p6T45ejcKLjrJaDHZrxlF5eQ9FtVux4cWNdiIQVJ__6rhhpEqrpLEBjA8o2Fut39URQb1ZxwX687vDzp2xl6VD0E0ghIw=w1280'
                  alt={"Product Preview"}
                  layout={"fill"}
                  className={"h-full w-full object-cover"}
                />
          )}
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {product.product.name}
          </Typography>
          <Typography>
          {product.product.category}

          </Typography>
          <Typography>
            {product.styles && product.styles.sale_price ? (
              <span className='sale-price'>
                <s>${product.product.default_price} </s>
                ${product.styles.sale_price}
              </span>
              ) : (
                <span className='original-price'>${product.product.default_price}</span>
              )}
            </Typography>
        </CardBody>
      </Card>
      </div>
    </React.Fragment>
  );
};

export default RelatedCards;
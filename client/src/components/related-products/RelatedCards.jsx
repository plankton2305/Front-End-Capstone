const { useEffect, useState } = require('react');
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

const RelatedCards = ({ product, currentDetails, setProductId }) => {
  const unfill = 'mask mask-star-2 bg-orange-400 opacity-50 hover:opacity-100';
  const fill = 'mask mask-star-2 bg-orange-400 hover:opacity-50';

  const [star, setStar] = useState(unfill);
  const [show, setShow] = useState(null);

  useEffect(() => {
    const savedProducts = getFromCloset();
    const savedProduct = savedProducts.find(item => item.product.id === product.product.id);
    if (savedProduct) {
      setStar(fill);
    } else {
      setStar(unfill);
    }
  }, [product.product.id]);

  const showCompare = () => {
    if (!show) {
      setShow('open');
    } else {
      setShow(null);
    }
  };

  const changeStyle = () => {
    if (star === unfill) {
      setStar(fill);
      showCompare();
      saveToCloset(product);
    } else {
      setStar(unfill);
      removeFromCloset(product.product.id);
    }
  };

  console.log(product);

  const selectNewProduct = () => {
    setProductId(product.product.id);
  };

  return (
    <React.Fragment>
      <div className="carousel-item">
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="h-60">
            {product.styles && product.styles.photos && product.styles.photos[0].url ? (
              <div className='relative'>
                <img
                  className='w-full'
                  src={product.styles.photos[0].url}
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
            <div className='rating absolute top-0 right-0 m-2'>
              <input name="rating-8" className={star} onClick={changeStyle} />
              <dialog id="my_modal_2" className="modal" open={show}>
                <div method="dialog" className="modal-box">
                  <Compare relatedId={product} currentDetails={currentDetails} />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button onClick={showCompare}></button>
                </form>
              </dialog>
            </div>
          </CardHeader>
          <CardBody>
            <span className="badge">{product.product.category}</span>
            <Typography variant="h5" color="blue-gray" className="mb-2" onClick={selectNewProduct}>
              {product.product.name}
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
            <Typography>
              ☆☆☆☆☆
            </Typography>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default RelatedCards;
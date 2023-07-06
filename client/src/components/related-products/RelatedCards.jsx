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
import CardImgSlider from './CardImgSlider.jsx';

const RelatedCards = ({ product, currentDetails, setProductId, setUpdateSaved }) => {
  const [show, setShow] = useState(null);

  const showCompare = () => {
    if (!show) {
      setShow('open');
    } else {
      setShow(null);
      setUpdateSaved(Date.now()); // re-render lists
    }
  };

  const selectNewProduct = () => {
    setProductId(product.product.id);
  };

  return (
    <React.Fragment>
      <div className="carousel-item">
        <Card className="mt-6 w-96  overflow-hidden">
          <CardHeader color="blue-gray" className="h-60 mt-5">
            {product.styles && product.styles.photos && product.styles.photos[0].url ? (
              <CardImgSlider product={product} selectNewProduct={selectNewProduct}/>
            ) : (
              <div className='realtive'>
                <img
                  src='../../_docs/default_pic.png'
                  alt={"Product Preview"}
                  layout={"fill"}
                  className={"h-full w-full object-cover"}
                  onClick={selectNewProduct}
                />
              </div>
            )}
            <div className='rating absolute top-0 right-0 m-2'>
              <input name="rating-8" className='mask mask-star-2 bg-orange-400 opacity-50 hover:opacity-100 h-10 px-5' onClick={showCompare} />
              <dialog id="my_modal_3" className="modal" open={show}>
                <div method="dialog" className="modal-box">
                  <div>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={showCompare}>✕</button>
                    <Compare relatedId={product} currentDetails={currentDetails} setUpdateSaved={setUpdateSaved} showCompare={showCompare} setShow={setShow} />
                  </div>
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
                  <span className='text-red'>${product.styles.sale_price}</span>
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
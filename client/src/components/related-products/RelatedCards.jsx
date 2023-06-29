const {useEffect, useState} = require('react');
import React from 'react';
const Products = require('../../api/products.js');
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Compare from './Compare.jsx';


{/* <Checkbox className='absolute top-0 right-0 m-2'></Checkbox> */}
{/* <button class='absolute top-0 right-0 m-2'>
<span class="mask mask-star-2 bg-orange-400"></span>
</button> */}
{/* <button class='absolute top-0 right-0 m-2'>button</button> */}

const RelatedCards = ({product}) => {
  const unfill = 'mask mask-star-2 bg-orange-400 opacity-50';
  const fill = 'mask mask-star-2 bg-orange-400';

  const [star, setStar] = useState(unfill);
  const [show, setShow] = useState(null);

  const changeStyle = () => {
    if (star === unfill) {
      setStar(fill);
      showCompare();
    } else {
      setStar(unfill);
    }
  };

  const showCompare = () => {
    if (!show) {
      setShow('open');
    } else {
      setShow(null);
    }
  }

  return (
    <React.Fragment>
      <div className="carousel-item">
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          {product.styles && product.styles.photos && product.styles.photos[0].url ? (
            <div className='relative'>
              <img
                className='w-full'
                src={product.styles.photos[0].url}
                alt={"Product Preview"}
                layout={"fill"}
                className={"h-full w-full object-cover"}
              />
              <div className='rating absolute top-0 right-0 m-2'>
                <input name="rating-2" className={star} onClick={changeStyle}/>
                <dialog id="my_modal_2" className="modal" open={show}>
                  <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                  </form>
                  <form method="dialog" className="modal-backdrop">
                    <button onClick={showCompare}></button>
                  </form>
                </dialog>
              </div>
            </div>
            ) : (
            <div className='realtive'>
              <img
                className='w-full'
                src='../../_docs/default_pic.png'
                alt={"Product Preview"}
                layout={"fill"}
                className={"h-full w-full object-cover"}
              />
              <div className='rating absolute top-0 right-0 m-2'>
                <input name="rating-2" className={star} onClick={changeStyle}/>
              </div>
            </div>
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
import { useState, useEffect } from "react";
import StyleSelector from './StyleSelector.jsx';
import Products from '../../../api/products.js';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDetails from './ProductDetails.jsx';

const Overview = ({ id, setCurrId, setProduct }) => {
  const [currStyleIndex, setCurrStyleIndex] = useState(-1);
  const [currProd, setCurrProd] = useState();
  const [productStyles, setProductStyles] = useState([]);

  const productStylesSetup = (arr) => {
    let a = [];
    let defIndex = -1;
    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i];
      if (curr['default?'] === true) {
        a.push(curr);
        defIndex = i;
      }
    }
    if (defIndex < 0) {
      return arr;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (i !== defIndex) {
          a.push(arr[i]);
        }
      }
      return a;
    }
  };

  useEffect(() => {
    Products.getProductById(id)
      .then((res) => {
        setCurrProd(res.data);
        setProduct(res.data);
      })
      .catch((err) => { console.log('getProduct ERROR: ', err); });
    Products.getStyles(id)
      .then((res) => {
        setProductStyles(productStylesSetup(res.data.results));
      })
      .catch((err) => { console.log('getStyles ERROR: ', err); });
    setCurrStyleIndex(0);
  }, [id]);

  let currStyle = productStyles[currStyleIndex];

  const [styleSelectorVisibility, setStyleSelectorVisibility] = useState('');

  const condRender = () => {
    if (id && currProd && productStyles.length > 0) {
      return (
        <div className = "flex flex-row justify-center">
          <div>
            <ImageGallery style = {productStyles[currStyleIndex]}/>
          </div>
          <div className = "m-2 p-2">
            <ProductInfo currProd = {currProd} style = {productStyles[currStyleIndex]}/>
            <StyleSelector
              styleArray={productStyles}
              currStyle={currStyle}
              setCurrStyleIndex={setCurrStyleIndex} />
            <AddToCart style = {currStyle} id = {id}/>
            <div>
              <ProductDetails currProd = {currProd}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  };

  return (
    <>
      {condRender()}
    </>
  );
};

export default Overview;
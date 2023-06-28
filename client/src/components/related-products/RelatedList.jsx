import React, { useRef, useState, useEffect } from "react";
import RelatedCards from './RelatedCards.jsx';
import Products from '../../api/products.js';
import { Carousel } from "@material-tailwind/react";

// Rough draft for html structure
const RelatedList = ({productId, setProductId}) => {
  const [productStyles, setProductStyles] = useState([]);
  const carouselRef = useRef(null);
  // let [relatedProducts, setRelatedProducts] = useState([]);

  const collectRelatedInfo = async () => { // make asynchronous
    try { // try catch block for error handling
      const response = await Products.getRelated(productId); // fetch related Id's based on current product Id
      const relatedIds = response.data; // save the array of id's

      // create an array of promises by mapping all the related id's
      const promises = relatedIds.map(async (id) => {
        const productResponse = await Products.getProductById(id);
        const stylesResponse = await Products.getStyles(id);

        let defaultStyle = stylesResponse.data.results.find(style => style['default?'] === true); // only take default style

        let relatedData = {
          product: productResponse.data,
          styles: defaultStyle
        };
        return relatedData;
      });

      const collection = await Promise.all(promises); // waits for all promises to finish and collects into results array

      setProductStyles(collection);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };


  useEffect(() => {
    collectRelatedInfo();
  }, []);

  console.log('PRODUCTS INFO IS ', productStyles);

  const scrollLeft = () => {
    carouselRef.current.scroll({
      left: carouselRef.current.scrollLeft - carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scroll({
      left: carouselRef.current.scrollLeft + carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <a className="btn btn-circle" onClick={scrollLeft}>❮</a>
      <div ref={carouselRef} className="carousel w-9/12 overflow-hidden rounded-box">
        {productStyles.map((product, index) => (
          <RelatedCards key={index} product={product} />
        ))}
      </div>
      <a className="btn btn-circle" onClick={scrollRight}>❯</a>
    </React.Fragment>
  );
};

export default RelatedList;
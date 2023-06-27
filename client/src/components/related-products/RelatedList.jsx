import { useState, useEffect } from "react";
import RelatedCards from './RelatedCards.jsx';
import Products from '../../api/products.js';

// Rough draft for html structure
const RelatedList = ({productId, setProductId}) => {
  const [productStyles, setProductStyles] = useState([]);
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

  //VICTOR COMMENTS OUT
  /*
  let [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(37313); //starts at 37313
  const [currProd, setCurrProd] = useState([]);
  const [productStyles, setProductStyles] = useState([]);

  useEffect(()=>{
    //STEP 1 GET PRODUCT
    Products.getProductById(productId)
      .then((res)=>{
        console.log('getProduct SUCCESS');
        console.log(res.data);
        setCurrProd(res.data);
      })
      .catch((err)=>{console.log('getProduct ERROR: ', err)})
    //STEP 2 GET STYLES
    Products.getStyles(productId)
      .then((res)=>{
        console.log('getStyles SUCCESS');
        console.log(res.data);
        setProductStyles(res.data.results);
      })
      .catch((err)=>{console.log('getStyles ERROR: ', err)})
    //STEP 3 GET RELATED
    Products.getRelated(productId)
        .then(response => {
          console.log('getRelated SUCCESS', response.data);
          setProducts(response.data);
        })
        .catch(err => {
          console.log('ERROR', err);
        })
  }, [productId]);
  */
  //VICTOR COMMENTED ABOVE OUT

  return (
    <div className='related-list'>
      <div className='related-products-container'   id='related-products-container'>
        <RelatedCards productStyles={productStyles}/>
      </div>
    </div>
  );
};

export default RelatedList;
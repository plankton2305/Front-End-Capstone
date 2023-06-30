import React, { useRef, useState, useEffect } from "react";
import RelatedCards from './RelatedCards.jsx';
import FavCards from './FavCards.jsx';
import Products from '../../api/products.js';
import { Carousel } from "@material-tailwind/react";
import _ from 'underscore';
import { saveToCloset, getFromCloset, removeFromCloset } from './accessYourCloset.js';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

// Rough draft for html structure
const RelatedList = ({ productId, setProductId }) => {
  const [storedProducts, setStoredProducts] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [favProducts, setFavProducts] = useState([]);
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const [currentDetails, setCurrentDetails] = useState([]);
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

      const uniqCollection = _.uniq(collection, (product) => product.product.id); // remove duplicates

      const storedProducts = getFromCloset();
      setStoredProducts(storedProducts);

      // Filter out the stored products from the collection
      const filteredCollection = uniqCollection.filter(product => {
        return (
          !storedProducts.find(savedProduct => savedProduct.product.id === product.product.id) &&
          product.product.id !== productId
        );
      });

      setProductStyles(filteredCollection);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  const collectCurrentInfo = () => {
    Products.getProductById(productId)
      .then(res => {
        setCurrentDetails(res.data);
      });
  };

  useEffect(() => {
    collectRelatedInfo();
    collectCurrentInfo();

    const storedProducts = getFromCloset();
    setFavProducts(storedProducts);
  }, [productId]);

  console.log('PRODUCTS INFO IS ', productStyles);
  console.log('WOW SUCH FAV', favProducts)

  const scrollLeft1 = () => {
    carouselRef1.current.scroll({
      left: carouselRef1.current.scrollLeft - carouselRef1.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight1 = () => {
    carouselRef1.current.scroll({
      left: carouselRef1.current.scrollLeft + carouselRef1.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft2 = () => {
    carouselRef2.current.scroll({
      left: carouselRef2.current.scrollLeft - carouselRef2.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight2 = () => {
    carouselRef2.current.scroll({
      left: carouselRef2.current.scrollLeft + carouselRef2.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h4" className='ml-50'>Related Products</Typography>
      <div className='carousel-container flex items-center'>
        <a className="btn btn-circle" onClick={scrollLeft1}>❮</a>
        <div ref={carouselRef1} className="carousel w-9/12 overflow-hidden rounded-box">
          {productStyles.map((product, index) => (
            <RelatedCards key={index} product={product} currentDetails={currentDetails} setProductId={setProductId} />
          ))}
        </div>
        <a className="btn btn-circle" onClick={scrollRight1}>❯</a>
      </div>
      <Typography variant="h4" className='ml-50'>Your Outfit</Typography>
      <div className='carousel-container flex items-center mt-5'>
        <a className="btn btn-circle" onClick={scrollLeft2}>❮</a>
        <div ref={carouselRef2} className="carousel w-9/12 overflow-hidden rounded-box">
          <div className="carousel-item">
            <Card className="mt-6 w-96 relative rounded-lg">
              <CardHeader
                color="blue-gray"
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute h-full w-full bg-[url('../../_docs/add_outfit.png')] bg-cover bg-center transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 rounded-lg"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 transition duration-300 ease-in-out hover:opacity-50 rounded-lg" />
              </CardHeader>
              <CardBody className="relative py-14 px-10 md:px-50 flex flex-col items-center justify-start absolute inset-x-0 top-10 h-16 rounded-lg">
                <Typography
                  variant="h2"
                  color="white"
                  className="font-medium leading-[1.5]"
                >
                  Add to Outfit
                </Typography>
                <Typography
                  variant="h2"
                  color="white"
                  className=" font-medium mt-14 leading-[1.5]">
                  +
                </Typography>
              </CardBody>
            </Card>
          </div>
          {favProducts.map((favProduct, index) => (
            <FavCards key={index} favProduct={favProduct} setProductId={setProductId} />
          ))}
        </div>
        <a className="btn btn-circle" onClick={scrollRight2}>❯</a>
      </div>
    </React.Fragment>
  );
};

export default RelatedList;
import React, { useRef, useState, useEffect } from "react";
import RelatedCards from './RelatedCards.jsx';
import FavCards from './FavCards.jsx';
import Products from '../../api/products.js';
import Compare from './Compare.jsx';
import { CarouselProps } from "@material-tailwind/react";
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
const RelatedList = ({ productId, setProductId }) => { //, currentPhoto
  const [storedProducts, setStoredProducts] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [favProducts, setFavProducts] = useState([]);
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const [currentDetails, setCurrentDetails] = useState([]);
  const [showLeftArrow1, setShowLeftArrow1] = useState(false);
  const [showRightArrow1, setShowRightArrow1] = useState(true);
  const [showLeftArrow2, setShowLeftArrow2] = useState(false);
  const [showRightArrow2, setShowRightArrow2] = useState(true);
  const [updateSaved, setUpdateSaved] = useState(Date.now());

  const plus = 'add_circle';
  const minus = 'do_not_disturb_on';

  const addIt = 'Add to Outfit';
  const removeIt = 'Remove from Outfit';

  const [adding, setAdding] = useState(plus);
  const [currentCardText, setCurrentCardText] = useState(addIt);

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

  const collectCurrentInfo = async () => { // make asynchronous
    try { // try catch block for error handling
      const currentProductResponse = await Products.getProductById(productId);
      const currentStylesResponse = await Products.getStyles(productId);

      let defaultStyle = currentStylesResponse.data.results.find(style => style['default?'] === true);
      const currentCollection = await Promise.all([currentProductResponse, currentStylesResponse]);

      let currentData = {
        product: currentProductResponse.data,
        styles: defaultStyle
      };

      setCurrentDetails(currentData);
    } catch (err) {
      console.log('ERROR IN RELATEDLIST COLLECT CURRENT INFO', err);
    }
  };

  useEffect(() => {
    collectRelatedInfo();
    collectCurrentInfo();

    if (productId) {
      const savedCurrentProducts = getFromCloset();
      const savedCurrentProduct = savedCurrentProducts.find(item => item.product.id === productId);
      if (savedCurrentProduct) {
        setAdding(minus);
        setCurrentCardText(removeIt)
      } else {
        setAdding(plus);
        setCurrentCardText(addIt);
      }
    }

    const storedProducts = getFromCloset();
    setFavProducts(storedProducts);
  }, [productId, updateSaved]);

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


  useEffect(() => {
    const handleCarouselScroll1 = () => {
      if (carouselRef1.current) {
        setShowLeftArrow1(carouselRef1.current.scrollLeft > 0);
        setShowRightArrow1(carouselRef1.current.scrollLeft < carouselRef1.current.scrollWidth - carouselRef1.current.offsetWidth);
      }
    };

    const handleCarouselScroll2 = () => {
      if (carouselRef2.current) {
        setShowLeftArrow2(carouselRef2.current.scrollLeft > 0);
        setShowRightArrow2(carouselRef2.current.scrollLeft < carouselRef2.current.scrollWidth - carouselRef2.current.offsetWidth);
      }
    };

    carouselRef1.current?.addEventListener("scroll", handleCarouselScroll1);
    carouselRef2.current?.addEventListener("scroll", handleCarouselScroll2);

    return () => {
      carouselRef1.current?.removeEventListener("scroll", handleCarouselScroll1);
      carouselRef2.current?.removeEventListener("scroll", handleCarouselScroll2);
    };
  }, []);

  const changeAddCard = () => {
    if (adding === plus) {
      saveToCloset(currentDetails);
      setUpdateSaved(Date.now());
    } else {
      removeFromCloset(currentDetails.product.id);
      setUpdateSaved(Date.now());
    }
  };

  return (
    <React.Fragment>
      <div className='grid justify-self-center'>
        <Typography variant="h4" className='ml-50'>Related Products</Typography>
        <div className='carousel-container flex justify-center w-9/12 flex items-center'>
          {showLeftArrow1 && (
            <a className="btn btn-circle" onClick={scrollLeft1}>❮</a>
          )}
          <div ref={carouselRef1} className="carousel w-9/12 overflow-hidden rounded-box">
            {productStyles.map((product, index) => (
              <RelatedCards key={index} product={product} currentDetails={currentDetails} setProductId={setProductId} setUpdateSaved={setUpdateSaved} />
            ))}
          </div>
          {showRightArrow1 && (
            <a className="btn btn-circle" onClick={scrollRight1}>❯</a>
          )}
        </div>
        <Typography variant="h4" className='ml-50'>Your Outfit</Typography>
        <div className='carousel-container flex justify-center mt-5 w-9/12 flex items-center'>
          {showLeftArrow2 && (
            <a className="btn btn-circle" onClick={scrollLeft2}>❮</a>
          )}
          <div ref={carouselRef2} className="carousel w-9/12 overflow-hidden rounded-box">

            <div className="carousel-item shrink-0">
              {/* <Card className="mt-6 w-96 rounded-lg overflow-hidden shrink-0" onClick={changeAddCard}> */}
                <Card
                  shadow={false}
                  className="h-[25rem] w-96 overflow-hidden mt-6" onClick={changeAddCard}
                >
                  <figure
                    floated="false"
                    shadow="false"
                    color="transparent"
                    className={`h-full w-full bg-cover bg-center transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 rounded-lg`}
                    style={{
                      backgroundImage: currentDetails.styles && currentDetails.styles.photos && currentDetails.styles.photos[0].url
                        ? `url(${currentDetails.styles.photos[0].url})`
                        : "url('../../_docs/default_pic.png')",
                    }}
                  >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 transition duration-300 ease-in-out hover:opacity-50 rounded-lg" />
                  </figure>
                  <CardBody className="relative py-14 px-10 md:px-50 flex flex-col items-center justify-start absolute inset-x-0 top-10 h-16 rounded-lg mt-8 pointer-events-none">
                    <Typography
                      variant="h3"
                      color="white"
                      className="font-medium leading-[1.5]"
                    >
                      {currentCardText}
                    </Typography>
                    <span className="material-symbols-outlined text-5xl text-white mt-5">{adding}</span>
                  </CardBody>
                </Card>
            </div>

            {favProducts.map((favProduct, index) => (
              <FavCards key={index} favProduct={favProduct} setProductId={setProductId} productId={productId} setUpdateSaved={setUpdateSaved} />
            ))}
          </div>
          {showRightArrow2 && (
            <a className="btn btn-circle" onClick={scrollRight2}>❯</a>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RelatedList;
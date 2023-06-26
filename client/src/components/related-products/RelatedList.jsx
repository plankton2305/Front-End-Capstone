import { useState, useEffect } from "react";
import axios from "axios";
import RelatedCards from './RelatedCards.jsx';

// Rough draft for html structure
const RelatedList = ({showDetailsOnClick}) => {
  let [products, setProducts] = useState([]);

  let onClick = (cardId) => {
    return showDetailsOnClick({id: cardId});
  };

  let getRelated = (id) => {

  }

  return (
    <div className='related-list'>
      {/* <div className='arrow left-arrow'></div>
      <div className='arrow right-arrow'></div> */}
      <div className='related-products-container' id='related-products-container'>
        {/* PRODUCT CARDS GO HITHER? */}
      </div>
    </div>
  );
};

export default RelatedList;
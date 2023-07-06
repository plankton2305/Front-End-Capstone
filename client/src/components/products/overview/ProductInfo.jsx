import {useState, useEffect} from "react";

const ProductInfo = ({currProd}) => {

  const renderInfo = () => {
    if (currProd !== null && currProd !== undefined) {
      console.log('***********', currProd)
      return (
        <div>
          <div>
            {currProd.category}
          </div>
          <div>
            {currProd.name}
          </div>
          <div>
            {`$${currProd.default_price}`}
          </div>
        </div>
      );
    }
  };


  return (
    <div>
      {renderInfo()}
    </div>

  );
};

export default ProductInfo;
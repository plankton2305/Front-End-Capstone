import {useState, useEffect} from "react";

const ProductInfo = ({currProd, style}) => {

  const renderCost = () => {
    if (style.sale_price !== undefined && style.sale_price !== null) {
      return (
        <div className = "flex flex-row">
          <div className = 'text-red-500 m-1'>
            {`$${style.sale_price}`}
          </div>
          <div className = 'm-1'>
            <s>{`$${currProd.default_price}`}</s>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {`$${currProd.default_price}`}
        </div>
      );
    }
  };

  const renderInfo = () => {
    if (currProd !== null && currProd !== undefined) {
      console.log('//////////////***********////////////////', style);
      return (
        <div>
          <div>
            {currProd.category}
          </div>
          <div>
            {currProd.name}
          </div>
          <div>
            {renderCost()}
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
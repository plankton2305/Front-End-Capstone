import {useState, useEffect} from "react";

const ProductInfo = ({currProd, style}) => {

  const renderCost = () => {
    if (style.sale_price !== undefined && style.sale_price !== null) {
      return (
        <div className = "flex flex-row">
          <div className = 'm-1'>
            <s>{`$${currProd.default_price}`}</s>
          </div>
          <div className = 'text-red-500 m-1'>
            {`$${style.sale_price}`}
          </div>
        </div>
      );
    } else {
      return (
        <div className = 'm-1'>
          {`$${currProd.default_price}`}
        </div>
      );
    }
  };

  const renderInfo = () => {
    if (currProd !== null && currProd !== undefined) {
      return (
        <div>
          <span className="badge opacity-80 text-lg font-sans tracking-tighter font-extralight font-sky-500">
            {currProd.category}
          </span>
          <div className = "text-3xl font-sans font-semibold">
            {currProd.name}
          </div>
          <div className = "text-xl font-thin font-teal-500">
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
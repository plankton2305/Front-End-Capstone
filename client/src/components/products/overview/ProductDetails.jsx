import {useState, useEffect} from "react";

const ProductDetails = ({currProd}) => {

  const renderSlogan = () => {
    if (currProd.slogan !== null && currProd.slogan !== undefined) {
      return (
        <div>
          {currProd.slogan}
        </div>
      );
    }
  };

  const renderDescription = () => {
    if (currProd.description !== null && currProd.description !== undefined) {
      return (
        <div>
          {currProd.description}
        </div>
      );
    }
  };
  const renderText = () => {
    return (
      <div className = "flex flex-col w-64 border-t-4 border-b-4 border-black-500 mx-4">
        <div className = "my-2 italic font-extralight">
          {renderSlogan()}
        </div>
        <div>
          {renderDescription()}
        </div>
      </div>
    );
  };

  const renderFeatures = () => {
    if (currProd.features !== null && currProd.features !== undefined) {
      return (
        <div className = "flex flex-col justify-content">
          {currProd.features.map((item, index)=>{
            if (item.value !== null) {
              return (<div className = "m-1" key = {index}>{item.value} {item.feature}</div>);
            } else {
              return (<div className = "m-1" key = {index}>{item.feature}</div>);
            }
          })}
        </div>
      );
    }
  };

  const renderInfo = () => {
    if (currProd !== null && currProd !== undefined) {
      return (
        <div className = "flex flex-col">
          <div className = "font-extrabold">
            <br></br>
            Features:
          </div>
          {renderFeatures()}
          {renderText()}
        </div>
      );
    }
  };


  return (
    <div >
      {renderInfo()}
    </div>
  );
};

export default ProductDetails;
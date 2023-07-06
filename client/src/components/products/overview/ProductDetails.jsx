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
      <div className = "flex flex-col">
        <div>
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
        <div className = "flex flex-col">
          {currProd.features.map((item)=>{
            if (item.value !== null) {
              return (<div>{item.value} {item.feature}</div>);
            } else {
              return (<div>{item.feature}</div>);
            }
          })}
        </div>
      );
    }
  };

  const renderInfo = () => {
    if (currProd !== null && currProd !== undefined) {

      console.log('***********', currProd)
      return (
        <div className = "flex flex-row">
          {renderText()}
          {renderFeatures()}
        </div>
      );
    }
  };


  return (
    <div >
      {console.log('CURR PROD ******************', currProd)}
      {renderInfo()}
    </div>
  );
};

export default ProductDetails;
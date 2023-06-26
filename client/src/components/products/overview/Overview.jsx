import {useState, useEffect} from "react";
import StyleSelector from './StyleSelector.jsx';

const Overview = ({id, currProd, productStyles}) => {
  console.log('OVERVIEW')
  const [currStyleIndex, setCurrStyleIndex]= useState(0)

  //useEffects
  useEffect(()=>{
    console.log('currSTYLE Index IS: ', currStyleIndex);
  }
  ,[currStyleIndex])

  console.log("ProductStyles is :", productStyles)
  let currStyle = productStyles[currStyleIndex];

  return (
    <div>
      OverView
      <StyleSelector
      styleArray = {productStyles}
      currStyle = {currStyle}
      //CHANGE THIS
      setCurrStyleIndex = {setCurrStyleIndex}/>
    </div>
  )
}

export default Overview;
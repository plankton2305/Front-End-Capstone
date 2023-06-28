import {useState, useEffect} from "react";
import StyleSelector from './StyleSelector.jsx';

const Overview = ({id, currProd, productStyles, setCurrId}) => {
  console.log('OVERVIEW')
  const [currStyleIndex, setCurrStyleIndex]= useState(0)

  //useEffects
  useEffect(()=>{
    console.log('currSTYLE Index IS: ', currStyleIndex);
  }
  ,[currStyleIndex])

  console.log("ProductStyles is :", productStyles)
  let currStyle = productStyles[currStyleIndex];
  const handleClick = ()=>{
    setCurrId(37314);
  }

  return (
    <div>
      OverView
      <button className="text-white bg-blue-700 hover:bg-blue-800" onClick = {handleClick}>CHANGE ID TO 37314</button>
      <StyleSelector
      styleArray = {productStyles}
      currStyle = {currStyle}
      //CHANGE THIS
      setCurrStyleIndex = {setCurrStyleIndex}/>
    </div>
  )
}

export default Overview;
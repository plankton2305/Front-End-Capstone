import {useState, useEffect} from "react";
import StyleButton from './StyleButton.jsx';

const StyleSelector = ({styleArray, currStyle, setCurrStyleIndex}) => {
  console.log('STYLE SELECTOR')
  console.log(currStyle);
  console.log(styleArray);
  let i = -1;

  return (
    <div>
      <div>
        <b>Style &gt;</b>{currStyle.name}
      </div>
      <br></br>
      {styleArray.map((style) =>
      <StyleButton
      style = {style}
      setCurrStyleIndex = {setCurrStyleIndex}
      buttIndex = {i += 1}/>
      )}
    </div>
  )
}

export default StyleSelector;
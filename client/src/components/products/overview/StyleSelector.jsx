import {useState, useEffect} from "react";
import StyleButton from './StyleButton.jsx';

const StyleSelector = ({styleArray, currStyle, setCurrStyleId}) => {
  console.log(currStyle);
  console.log(styleArray);

  return (
    <div>
      <div>
        <b>Style &gt;</b>{currStyle.name}
      </div>
      <br></br>
      {styleArray.map((style) =>
      <StyleButton style = {style} setCurrStyleId = {setCurrStyleId}/>
      )}
    </div>
  )
}

export default StyleSelector;
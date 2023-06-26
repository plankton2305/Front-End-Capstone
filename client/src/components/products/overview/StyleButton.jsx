import {useState, useEffect} from "react";

const StyleButton = ({style, setCurrStyleIndex, buttIndex}) => {

  console.log('STYLE BUTTON')
  const handleClick = () => {
    console.log('button click: ', buttIndex)
    setCurrStyleIndex(buttIndex);
  }

  //replace button with image
  return (
    <div>
      <button onClick = {handleClick}>{style.name}</button>
    </div>
  )
}

export default StyleButton;
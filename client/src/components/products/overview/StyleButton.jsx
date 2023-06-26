import {useState, useEffect} from "react";

const StyleButton = ({style, setCurrStyleId}) => {

  const handleClick = () => {
    console.log('button click')
    setCurrStyleId(style.style_id - 1);
  }

  //replace button with image
  return (
    <div>
      <button onClick = {handleClick}>{style.name}</button>
    </div>
  )
}

export default StyleButton;
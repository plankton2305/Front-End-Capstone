import {useState, useEffect} from "react";

const StyleButton = ({style, setCurrStyleIndex, buttIndex, currStyleId}) => {

  // console.log('STYLE BUTTON')
  const handleClick = (e) => {
    // e.target.className = style2
    console.log('button click: ', buttIndex)
    if (currStyleId !== style.style_id){
      setCurrStyleIndex(buttIndex);
    }
  }
  const thumb = style.photos[0].thumbnail_url
  const check = "data:image/png;base64,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"
  const checkRender = ()=>{
    if (currStyleId === style.style_id) {
      return (
        <img className="top-1 left-14 absolute w-5 h-5 rounded-full border-2 border-slate-900" src = {check}></img>
      )
    }
  }
  //replace button with image
  return (
    <div className = "relative m-1 cursor-pointer" onClick = {handleClick}>
      <img className="w-20 h-20 rounded-full object-cover hover:blur-sm transition-all duration-400 ease-out-in" src={thumb}></img>
      {checkRender()}
    </div>
  )
}

export default StyleButton;
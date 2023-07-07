import {useState, useEffect} from "react";
import ImageButton from './ImageButton.jsx';

const ImageList = ({photoArr, setPhotoIndex, currPhoto}) => {


  let buttIndex = -1;
  const renderList = () => {
    return photoArr.map((item, index)=>{
      return <ImageButton key = {index} photoUrl = {item} buttIndex = {buttIndex += 1} setFunc = {setPhotoIndex} currPhoto = {currPhoto}/>;
    });
  };

  return (
    <div>
      {renderList()}
    </div>
  );
};

export default ImageList;
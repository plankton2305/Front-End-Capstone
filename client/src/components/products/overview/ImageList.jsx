import {useState, useEffect} from "react";
import ImageButton from './ImageButton.jsx';

const ImageList = ({photoArr, setPhotoIndex, currPhoto}) => {


  let buttIndex = -1;
  const renderList = () => {
    return photoArr.map((item)=>{
      return <ImageButton photoUrl = {item} buttIndex = {buttIndex += 1} setFunc = {setPhotoIndex} currPhoto = {currPhoto}/>;
    });
  };

  return (
    <div className = "overflow-auto">
      {renderList()}
    </div>
  );
};

export default ImageList;
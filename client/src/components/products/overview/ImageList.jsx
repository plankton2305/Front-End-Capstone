import {useState, useEffect} from "react";
import ImageButton from './ImageButton.jsx';

const ImageList = ({photoArr, setPhotoIndex, currPhoto}) => {


  let buttIndex = -1;
  const renderList = () => {
    return photoArr.map((item, index)=>{
      return <div key = {index} className='carousel-item scroll-mt-2'><ImageButton photoUrl = {item} buttIndex = {buttIndex += 1} setFunc = {setPhotoIndex} currPhoto = {currPhoto}/></div>;
    });
  };

  return (
    <div className='h-[720px] carousel carousel-vertical'>
      {renderList()}
    </div>
  );
};

export default ImageList;
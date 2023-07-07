import {useState, useEffect} from "react";
import ImageList from './ImageList.jsx';
import PhotoView from './PhotoView.jsx';

const ImageGallery = ({style}) => {

  const [photoIndex, setPhotoIndex] = useState(0);
  const thumbArr = () => {
    if (style.photos !== undefined || style.photos !== null) {
      return style.photos.map((item)=>{
        return item.thumbnail_url;
      });
    } else {
      return [];
    }
  };

  return (
    <div className = "flex flex-row">
      <div className = "my-2">
        <ImageList photoArr = {thumbArr()} setPhotoIndex = {setPhotoIndex} currPhoto = {photoIndex}/>
      </div>
      <div className = "w-[1050px] relative">
        <PhotoView photoArr = {style.photos} photoIndex = {photoIndex} setPhotoIndex = {setPhotoIndex}/>
      </div>
    </div>
  );
};

export default ImageGallery;
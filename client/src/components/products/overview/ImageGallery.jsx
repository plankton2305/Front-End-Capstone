import {useState, useEffect} from "react";
import ImageList from './ImageList.jsx';
import PhotoView from './PhotoView.jsx';

const ImageGallery = ({style}) => {

  const [photoIndex, setPhotoIndex] = useState(0);
  const [leftTransform, setLeftTransform] = useState(72);
  // const [currImageString, setCurrImageString] = useState("https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png")

  // const displayPhoto = ()=>{
  //   console.log(style.photos);
  //   console.log(style.photos[photoIndex]);
  //   setCurrImageString(style.photos[photoIndex].url);
  //   // if (
  //   //   style.photos[photoIndex] === undefined ||
  //   //   style.photos[photoIndex] === null
  //   // ) {
  //   //   setCurrImageString(noImage);
  //   // } else {
  //   //   setCurrImageString(style.photos[photoIndex].url);
  //   // }
  // };

  const thumbArr = () => {
    if (style.photos !== undefined || style.photos !== null) {
      return style.photos.map((item)=>{
        return item.thumbnail_url;
      });
    } else {
      return [];
    }
  };

  useEffect(()=>{
    console.log('PHOTO CHOSEN: ', photoIndex);
    // displayPhoto();
  }, [photoIndex]);

  return (
    <div className = "flex flex-row relative">
      <div className = "h-[478px] overflow-y-auto absolute">
        <ImageList photoArr = {thumbArr()} setPhotoIndex = {setPhotoIndex} currPhoto = {photoIndex}/>
      </div>
      <div className = "flex h-[478px] w-[842px] relative transition-all duration-500 object-left">
        <PhotoView photoArr = {style.photos} photoIndex = {photoIndex} setPhotoIndex = {setPhotoIndex} setLeftTransform = {setLeftTransform}/>
      </div>
    </div>
  );
};

export default ImageGallery;
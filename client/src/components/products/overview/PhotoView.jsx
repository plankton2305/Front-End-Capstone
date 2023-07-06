import {useState, useEffect} from "react";
import {Carousel} from "@material-tailwind/react";

const PhotoView = ({photoArr, photoIndex, setPhotoIndex, setLeftTransform}) => {

  const [expanded, setExpanded] = useState('870px');

  let noImage = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  let currImageString = (photoArr[photoIndex] === undefined ? noImage : photoArr[photoIndex].url);

  const leftClick = () => {
    console.log(photoIndex);
    if (photoIndex !== 0) {
      setPhotoIndex(photoIndex - 1);
    }
  };

  const rightClick = ()=>{
    console.log(photoIndex);
    if (photoIndex !== photoArr.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  };

  const imageClick = () => {
    if (expanded === '870px') {
      setExpanded('98vw');
      // setLeftTransform(-100);
      console.log(expanded);
    } else {
      setExpanded('870px');
      // setLeftTransform(72);
      console.log(expanded);
    }
  };

  return (
    <div className = "transition-all ease-in-out duration-500 h-[478px] flex center items-center justify-center relative bg-red-500 z-50" style = {{width: `${expanded}`}}>
      <img className = "h-full" src = {currImageString} onClick = {imageClick}></img>
      <img src = 'https://cdn4.iconfinder.com/data/icons/geomicons/32/672373-chevron-left-512.png'
        className = "w-10 h-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 cursor-pointer p-2
        border-black bg-white bg-opacity-50 hover:border-4 transition-all hover:bg-opacity-75"
        onClick = {leftClick}></img>
      <img src = 'https://cdn4.iconfinder.com/data/icons/geomicons/32/672374-chevron-right-512.png'
        className = "w-10 h-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 cursor-pointer p-2
        border-black bg-white bg-opacity-50 hover:border-4 transition-all hover:bg-opacity-75"
        onClick = {rightClick}></img>
    </div>
  );
};

export default PhotoView;
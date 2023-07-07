import {useState, useEffect, useRef} from "react";
import {Carousel} from "@material-tailwind/react";

const PhotoView = ({photoArr, photoIndex, setPhotoIndex, setLeftTransform}) => {

  const [expanded, setExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({});

  let noImage = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  let currImageString = (photoArr[photoIndex] === undefined ? noImage : photoArr[photoIndex].url);

  const leftClick = () => {
    if (photoIndex !== 0) {
      setPhotoIndex(photoIndex - 1);
    }
  };
  const rightClick = ()=>{
    if (photoIndex !== photoArr.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  };

  const imageClick = () => {
    setExpanded(!expanded);
  };

  const expandWidth = () => {
    if (expanded) {
      return '1500px';
    } else {
      return '1050px';
    }
  };
  const zoomObj = () => {
    if (expanded) {
      return {transform: 'scale(3.5, 3.5)',
        cursor: 'crosshair',
        translate: `${-mousePos.x * 3.5 * document.getElementById("myImg").clientWidth}px
          ${-mousePos.y * 3.5 * document.getElementById("myImg").clientWidth}px`};
    } else {
      return {cursor: 'zoom-in'};
    }
  };

  useEffect(() => {
    var elem = document.getElementById("view");

    const onMouseMove = (event) => {
      let rawX = event.clientX;
      let rawY = event.clientY;
      var bounds = elem.getBoundingClientRect();
      setMousePos({x: (rawX - (((bounds.right + bounds.left)/2)))/(bounds.right-bounds.left),
        y: (rawY - ((bounds.bottom + bounds.top)/2))/(bounds.bottom-bounds.top)});
    };

    elem.addEventListener("mousemove", onMouseMove, false);

    return () => {
      elem.removeEventListener(
        'mousemove',
        onMouseMove
      );
    };
  }, []);

  return (
    <div id = "view" className = "m-2 h-[720px] center items-center justify-center bg-white relative z-50 transition-all ease-in-out duration-400 overflow-hidden" style = {{width: `${expandWidth()}`}}>
      <img id="myImg" className="h-full mx-auto object-contain transition-transform ease-in-out duration-400"
        src = {currImageString} onClick = {imageClick} style = {zoomObj()}></img>
      <img src = 'https://cdn4.iconfinder.com/data/icons/geomicons/32/672373-chevron-left-512.png'
        className = "w-16 h-16 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 cursor-pointer p-2
        border-black bg-white bg-opacity-50 hover:border-4 transition-all hover:bg-opacity-75"
        onClick = {leftClick} style = {{}}></img>
      <img src = 'https://cdn4.iconfinder.com/data/icons/geomicons/32/672374-chevron-right-512.png'
        className = "w-16 h-16 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 cursor-pointer p-2
        border-black bg-white bg-opacity-50 hover:border-4 transition-all hover:bg-opacity-75"
        onClick = {rightClick}></img>
    </div>
  );
};

export default PhotoView;
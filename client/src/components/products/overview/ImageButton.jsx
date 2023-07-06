import {useState, useEffect} from "react";

const ImageButton = ({photoUrl, setFunc, buttIndex, currPhoto}) => {
  const [selected, setSelected] = useState(false);


  const handleClick = () => {
    setFunc(buttIndex);
  };

  const renderImg = () => {
    let styleString = `m-1 w-16 h-16 object-cover cursor-pointer border-black hover:border-b-4 transition-all duration-400 ease-out-in`;
    if (buttIndex === currPhoto) {
      styleString = `m-1 w-16 h-16 object-cover cursor-pointer border-black hover:border-b-4 border-b-8 transition-all duration-400 ease-out-in`;
    }
    return <img className = {styleString} src = {photoUrl} onClick = {handleClick}></img>
  };

  useEffect(()=>{
  }, [currPhoto]);

  return (
    <div>
      {renderImg()}
    </div>
  );
};

export default ImageButton;
import {useState, useEffect} from "react";

const ImageButton = ({photoUrl, setFunc, buttIndex, currPhoto}) => {
  const [selected, setSelected] = useState(false);


  const handleClick = () => {
    setFunc(buttIndex);
  };

  const renderImg = () => {
    let styleString = `m-2 w-24 h-24 object-cover cursor-pointer border-black hover:border-b-[6px] transition-all duration-400 ease-out-in`;
    if (buttIndex === currPhoto) {
      styleString = `m-2 w-24 h-24 object-cover cursor-pointer border-black hover:border-b-[6px] border-b-[12px] transition-all duration-400 ease-out-in`;
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
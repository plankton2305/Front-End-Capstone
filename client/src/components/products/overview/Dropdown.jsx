import { useState, useEffect } from "react";

const Dropdown = ({ itemsArray, defaultValue, setterFunc, size }) => {

  const selectString = `w-${size} h-10 rounded-none px-4 bg-white border-black border-2 hover:bg-white hover:border-slate-700`;
  // const optionStr = `w-${size} shadow z-[1] bg-white`;
  let k = -1;

  const handleClick = (e) => {
    console.log('buttonClick', e.target.value);
    setterFunc(Number(e.target.value));
  };

  const listRender = () => {
    console.log("LIST ARRAY: ", itemsArray);
    return itemsArray.map((item) => {
      return <option
        className='font-bold rounded-none'
        value={`${k += 1}`}
        name={item}>{item}</option>;
    });
  };

  const renderList = () => {
    if (itemsArray === undefined && defaultValue === '-') {
      return <select className = {selectString} onChange = {handleClick} >
        <option
          className = 'font-bold'
          value="none"
          selected disabled hidden>{defaultValue}</option>
        {listRender()}
      </select>;
    } else {
      return <select className = {selectString} onChange = {handleClick} >
        <option
          className = 'font-bold'
          value="none"
          selected disabled hidden>{defaultValue}</option>
        {listRender()}
      </select>;
    }
  };



  return (
    <div>
      {renderList()}
    </div>
  );
};

export default Dropdown;
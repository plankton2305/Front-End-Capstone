import { useState, useEffect } from "react";

const Dropdown = ({ itemsArray, defaultValue, setterFunc, size }) => {

  const selectString = `w-${size} h-10 rounded-sm px-4 bg-white border-black border-2 hover:bg-white hover:border-slate-700`;
  let k = -1;

  const handleClick = (e) => {
    setterFunc(Number(e.target.value));
  };

  const listRender = () => {
    return itemsArray.map((item, index) => {
      return <option
        key = {index}
        className='font-bold rounded-sm'
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
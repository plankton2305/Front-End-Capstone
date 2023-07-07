import { useState, useEffect } from "react";
import _ from 'underscore';
import Dropdown from './Dropdown.jsx';

const AddToCart = ({ style, id }) => {

  const [sizesArray, setSizesArray] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [selectedSize, setSelectedSize] = useState(-1);
  const [selectedQty, setSelectedQty] = useState(-1);
  const [warningClass, setWarningClass] = useState("invisible text-red-500");

  let isValidArray = (sizesArray.length > 0 && quantities.length > 0);

  const oneToNArr = (x) => {
    if (x > 15) {
      return _.range(1, 16);
    } else {
      return _.range(1, x + 1);
    }
  };

  const sizeFunc = (a) => {
    setWarningClass("invisible text-red-500");
    setSelectedSize(a);
  };
  const qtyFunc = (a) => {
    setSelectedQty(a);
  };

  const makeArray = () => {
    let tempSizeArray = [];
    let tempQtyArray = [];
    for (const value of Object.values(style.skus)) {
      if (value.quantity !== null && value.quantity > 0) {
        tempSizeArray.push(value.size);
        tempQtyArray.push(oneToNArr(value.quantity));
      }
    }
    setSizesArray(tempSizeArray);
    setQuantities(tempQtyArray);
  };

  const cartClick = () => {
    if (selectedSize < 0) {
      setWarningClass("visible text-red-500")
    }
  };

  useEffect(() => {
    makeArray();
  }, [style]);

  useEffect(()=>{
    setSelectedQty(-1);
    setSelectedSize(-1);
  }, [id]);

  return (
    <div>
      <table>
        <tr>
          <td className = {warningClass}>Please select a size</td>
        </tr>
        {isValidArray ?
          <tr>
            <td>
              <Dropdown itemsArray={sizesArray} defaultValue={'Select Size'} setterFunc={sizeFunc} size={40} />
            </td>
            <td>
              {quantities[selectedSize] === undefined ?
                <select className="w-20 h-10 rounded-sm px-4 bg-white border-black border-2 hover:bg-white hover:border-slate-700">
                  <option className='font-bold' selected disabled hidden>-</option>
                </select>
                :
                <Dropdown itemsArray={quantities[selectedSize]} defaultValue={'-'} setterFunc={qtyFunc} size={20} />}
            </td>
          </tr>
          :
          <tr>
            <td>
              <select disabled className="w-40 h-10 rounded-sm px-4 bg-white border-black border-2 hover:bg-white hover:border-slate-700">
                <option className='font-bold' selected disabled hidden>Out of Stock</option>
              </select>
            </td>
            <td>
              <select disabled className="w-20 h-10 rounded-sm px-4 bg-white border-black border-2 hover:bg-white hover:border-slate-700">
                <option className='font-bold' selected disabled hidden>-</option>
              </select>
            </td>
          </tr>
        }
        <tr>
          <th colspan = "2">
            {isValidArray ? <button className = "transition-all w-60 bg-white hover:bg-gray-700 text-slate-700 hover:text-white font-bold py-2 px-4 rounded-sm border-black border-2 hover:border-slate-700" onClick = {cartClick}>Add to Cart</button> : <div></div>}
          </th>
        </tr>
      </table>
    </div>

  );
};

export default AddToCart;
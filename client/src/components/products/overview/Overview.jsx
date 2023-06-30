import {useState, useEffect} from "react";
import StyleSelector from './StyleSelector.jsx';
import Products from '../../../api/products.js';

const Overview = ({id, setCurrId}) => {
  // console.log('OVERVIEW')
  const [currStyleIndex, setCurrStyleIndex]= useState(0)
  const [currProd, setCurrProd] = useState();
  const [productStyles, setProductStyles] = useState([]);

  //useEffects
  useEffect(()=>{
    // console.log('currSTYLE Index IS: ', currStyleIndex);
  }
  ,[currStyleIndex])

  useEffect(()=>{
    Products.getProductById(id)
      .then((res)=>{
        // console.log('getProduct SUCCESS')
        // console.log(res.data)
        setCurrProd(res.data);
      })
      .catch((err)=>{console.log('getProduct ERROR: ', err)})
    Products.getStyles(id)
      .then((res)=>{
        // console.log('getStyles SUCCESS')
        // console.log(res.data.results)
        setProductStyles(productStylesSetup(res.data.results));
      })
      .catch((err)=>{console.log('getStyles ERROR: ',err)})
  },[id])

  // console.log("ProductStyles is :", productStyles)

  let currStyle = productStyles[currStyleIndex];

  const handleClick = ()=>{
    setCurrId(37314);
  }

  const productStylesSetup = (arr) => {
    let a = [];
    let defIndex = -1;
    for (let i = 0; i < arr.length; i++){
      let curr = arr[i];
      if (curr['default?'] === true) {
        a.push(curr)
        defIndex = i;
      }
    }
    if (defIndex < 0) {
      // console.log('------------ALL -------------- FALSE ------------')
      return arr;
    } else {
      for (let i = 0; i < arr.length; i++){
        if (i !== defIndex) {
          a.push(arr[i])
        }
      }
      return a;
    }
  }

  const condRender = () => {
    if (id && currProd && productStyles.length > 0) {
      return (<StyleSelector
        styleArray = {productStyles}
        currStyle = {currStyle}
        setCurrStyleIndex = {setCurrStyleIndex}/>)
    } else {
      return (<div></div>)
    }
  }

  return (
    <div>
      OverView
      <button className="text-white bg-blue-700 hover:bg-blue-800" onClick = {handleClick}>CHANGE ID TO 37314</button>
      {condRender()}
    </div>
  )
}

export default Overview;
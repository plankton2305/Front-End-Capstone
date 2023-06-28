import {React, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/products/overview/Overview.jsx';
import Products from './api/products.js';
import './index.css';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [currId, setCurrId] = useState(37313); //starts at 37311
  const [currProd, setCurrProd] = useState();
  const [productStyles, setProductStyles] = useState([]);

  useEffect(()=>{
    Products.getProductById(currId)
      .then((res)=>{
        console.log('getProduct SUCCESS')
        console.log(res.data)
        setCurrProd(res.data);
      })
      .catch((err)=>{console.log('getProduct ERROR: ', err)})
    Products.getStyles(currId)
      .then((res)=>{
        console.log('getStyles SUCCESS')
        console.log(res.data.results)
        setProductStyles(productStylesSetup(res.data.results));
      })
      .catch((err)=>{console.log('getStyles ERROR: ',err)})
  },[currId])

  //makes sure default is first in the styles array
  //if no default, just returns the same array
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
      console.log('------------ALL -------------- FALSE ------------')
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
    if (currId && currProd && productStyles.length > 0) {
      return (<Overview
        id = {currId}
        currProd = {currProd}
        productStyles = {productStyles}
        setCurrId = {setCurrId}/>)
    } else {
      return (<div></div>)
    }
  }

  return (
    <div>
      {condRender()}
    </div>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
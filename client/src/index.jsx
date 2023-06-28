// react imports
import {React, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';

//tailwind imports
import './index.css';
import 'tailwindcss/tailwind.css';

//api imports
import Products from './api/products.js';

//component imports
import Overview from './components/products/overview/Overview.jsx';

const App = () => {
  const [currId, setCurrId] = useState();

  useEffect(()=>{
    Products.getProducts()
      .then((res)=>{
        console.log('Get PRODUCTS')
        console.log(res.data)
        setCurrId(res.data[0]?.id || '')
      })
      .catch((err)=>{console.log('GET PRODUCTS ERROR: ', err)})
  },[])

  const condRender = () => {
    if (currId) {
      return (<Overview
        id = {currId}
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
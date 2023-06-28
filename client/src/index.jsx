// react imports
import {React, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import RelatedList from './components/related-products/RelatedList.jsx';
import Review from './components/product-review/index.jsx';

import Products from './api/products.js';
import './index.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from "@material-tailwind/react";

// api imports
import Products from './api/products.js';

// component imports
import Overview from './components/products/overview/Overview.jsx';
import RelatedList from './components/related-products/RelatedList.jsx';

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
      return (<div><Overview
        id = {currId}
        setCurrId = {setCurrId} />
        <RelatedList productId={currId} setProductId={setCurrId} /></div>
        )
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

createRoot(document.getElementById('app')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

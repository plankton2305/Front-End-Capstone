import {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';

//Styling Imports
import './index.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from "@material-tailwind/react";

// api imports
import Products from './api/products.js';

// component imports
import Review from './components/product-review/index.jsx';
import Overview from './components/products/overview/Overview.jsx';
import RelatedList from './components/related-products/RelatedList.jsx';
import QuestionsAndAnswers from './components/qa/index.jsx';

const App = () => {
   const [currId, setCurrId] = useState();
   const [productSeller, setProductSeller] = useState('');
   const [product, setProduct] = useState({});

   useEffect(()=>{
     Products.getProducts()
       .then((res)=>{
        //  console.log('Get PRODUCTS', res.data)
         setCurrId(res.data[0]?.id || '')
         setProductSeller(res.data[0]?.name || '')
         setProduct(res.data[0])
       })
       .catch((err)=>{console.log('GET PRODUCTS ERROR: ', err)})
   },[])

  const condRender = () => {
    if (currId) {
      return (<div>
        {/* <Overview id = {currId} setCurrId = {setCurrId} /> */}
        {/* <RelatedList productId={currId} setProductId={setCurrId} /> */}
        <QuestionsAndAnswers productId={currId} seller={productSeller} product={ product} />
        {/* <Review productId={currId} /> */}
        </div>
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

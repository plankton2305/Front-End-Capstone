import { useState, useEffect } from 'react';
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
  const [product, setProduct] = useState();
  const [currId, setCurrId] = useState();

  useEffect(() => {
    Products.getProducts()
      .then((res) => {
        setCurrId(res.data[0]?.id || '')
        setProduct(res.data[0])
      })
      .catch((err) => { console.log('GET PRODUCTS ERROR: ', err) })
  }, []);

  const condRender = () => {
    if (currId) {
      return (
        <div>
          <div className = "flex flex-col justify-content">
            <Overview id={currId} setCurrId={setCurrId} setProduct={setProduct}/>
          </div>
          <RelatedList productId={currId} setProductId={setCurrId} />
          <QuestionsAndAnswers product={product} />
          <Review productId={currId} />
        </div>
      )
    } else {
      return (<div></div>)
    }
  };

  return (
    <>
    <header className="bg-[#c5d8d6] w-full h-[100px]">
      <div className="flex justify-center items-center h-full">
        <div className="flex justify-center items-center h-full">
          <img src="logo.png" className="h-full"/>
        </div>
      </div>
    </header>
    <div className="bg-[#f1f3f2]">
      {condRender()}
    </div>
    </>
  );
};

createRoot(document.getElementById('app')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

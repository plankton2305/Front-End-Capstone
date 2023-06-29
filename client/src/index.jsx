import {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import RelatedList from './components/related-products/RelatedList.jsx';
import Products from './api/products.js';
import './index.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from "@material-tailwind/react";





const App = () => {
   //array of related products
  const [productId, setProductId] = useState(37316); //starts at 37313


  return (
    <div>
      <p>WELCOME TO THE FREAKIN' CHUM CLOSET, YA LOSERS!</p>
      <section>
        <RelatedList productId={productId} setProductId={setProductId} />
      </section>
    </div>
  )
}

createRoot(document.getElementById('app')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default App;
import {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import RelatedList from './components/related-products/RelatedList.jsx';
import Ratings from './components/product-review/Ratings.jsx';
import Products from './api/products.js';
import './index.css';
import 'tailwindcss/tailwind.css';



const App = () => {
   //array of related products
  const [productId, setProductId] = useState(37311); //starts at 37313


  return (
    <div>
      <p>WELCOME TO THE FREAKIN' CHUM CLOSET, YA LOSERS!</p>
      <section>
        <RelatedList productId={productId} setProductId={setProductId} />
      </section>
      <Ratings productId={productId} />
    </div>
  )
}

createRoot(document.getElementById('app')).render(<App />);
export default App;
import {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';

import Api from '../../../api/index.js';

const App = () => {
  const [product_id, setProductId] = useState('');
  const api = new Api('products');

  // set initial product id to first return from /products
  useEffect(() => {
    api.get().then((response) => {
      setProductId(response.data[0].id);
    })
    .catch((err) => {
      console.log('err', err);
    })
  }, [])
  
  
  return (
    <>
      Hello World
    </>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
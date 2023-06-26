import {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import RelatedApp from './components/related-products/RelatedApp.jsx';

const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <p>HELLO, NOT</p>
      <section>
        <RelatedApp />
      </section>
    </div>
  )
}

createRoot(document.getElementById('app')).render(<App />);
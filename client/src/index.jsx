import {React, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import RelatedApp from './components/related-products/RelatedApp.jsx';

const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <p>HELLO WORLD!</p>
      <section>
        <RelatedApp />
      </section>
    </div>
  )
}

createRoot(document.getElementById('app')).render(<App />);
export default App;
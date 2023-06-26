import {React, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/products/overview/Overview.jsx';


const App = () => {
  const [currId, setCurrId] = useState(11); //this is dummy data

  return (
    <div>
     <Overview id = {currId}/>
    </div>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
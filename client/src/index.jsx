import {React, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/products/overview/Overview.jsx';
import Api from '../../api/index.js';

const App = () => {
  const [currId, setCurrId] = useState(11); //this is dummy data

  const dingus = new Api('products');

  console.log('dingus is:', dingus);

  dingus.get('')
    .then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log('errored')
      console.log(err)
    })

  return (
    <div>
     <Overview id = {currId}/>
    </div>
  )
}

createRoot(document.getElementById('app')).render(<App />);
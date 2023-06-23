import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from '../../components/Overview.jsx';


const App = () => {
  return (
    <div> AHHAHAHHA
    <Overview/>
    </div>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
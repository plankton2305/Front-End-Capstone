import React from 'react';
const Compare = require('./Compare.jsx');
const FavCards = require('./FavCards.jsx');
const FavList = require('./FavList.jsx');
const RelatedCards = require('./RelatedCards.jsx');
const RelatedList = require('./RelatedList.jsx');
import axios from 'axios';


const RelatedApp = () => {
  // useEffect(() => {
  //   axios.get('/products')
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log('ERROR!', error);
  //     });
  // }, []);

  return (
    <section>
      <p>WORKING</p>
      <div>
        <RelatedList/>
        {/* <FavList/> */}
      </div>
    </section>
  )
}

export default RelatedApp;
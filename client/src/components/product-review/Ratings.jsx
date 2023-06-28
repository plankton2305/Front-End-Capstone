import StarRating from './Star-Rating.jsx';
import { useState, useEffect } from 'react';
import Reviews from '../../api/reviews.js';
//const Reviews = require('../../api/reviews.js');

const Ratings = ({ productId }) => {
  //const [starVal, setStarVal] = useState(3.5);
  const [reviewMeta, setReviewMeta] = useState({});

  // const calculateAverage = (ratings) => {
  //   let sum = 0;
  //   let numOfRatings = 0;
  //   for (const val in ratings) {
  //     sum += Number(val) * ratings[val];
  //     numOfRatings += Number(ratings[val]);
  //   }

  //   console.log(numOfRatings)
  //   return numOfRatings ? ( sum / numOfRatings ) : 0;
  // }

  useEffect(() => {
    //get review metadata
    Reviews.getMetaData(productId)
      .then((response) => {
        console.log(response.data);
        setReviewMeta(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      {/* Entire left sidebar should be floated to the left and kept fixed relative to rating list */}
      <div>
        {/* Head of Widget */}
        <h3>
          RATINGS & REVIEWS
        </h3>
        <StarRating reviewMeta={reviewMeta}/>
      </div>
      <div>
        {/* Bar Graph Representation of Ratings Goes Here */}
        <p>Bar Graph Goes Here</p>
      </div>
      <div>
        <p>Fit Ratings Go Here</p>
        {/* Fit Ratings */}
      </div>
    </div>
  );
}

export default Ratings;
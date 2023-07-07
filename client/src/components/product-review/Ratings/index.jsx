import StarRating from './Star-Rating.jsx';
import { useState, useEffect } from 'react';
import Reviews from '../../../api/reviews.js';
import RatingBreakdown from './Rating-Breakdown/index.jsx';
import FitBreakdown from './Fit-Breakdown/index.jsx';
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
        console.log(`REVIEW META::::\n${JSON.stringify(response.data,null,2)}`);
        setReviewMeta(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="inline-block flex-initial">
      {/* Entire left sidebar should be floated to the left and kept fixed relative to rating list */}
      <div>
        <div>
          <StarRating reviewMeta={reviewMeta}/>
        </div>
        <div>
          {/* Bar Graph Representation of Ratings Goes Here */}
          <p>Bar Graph Goes Here</p>
          <RatingBreakdown reviewMeta={reviewMeta} />
        </div>
        <div>
          <p>Fit Ratings Go Here</p>
          <FitBreakdown reviewMeta={reviewMeta} />
          {/* Fit Ratings */}
        </div>
      </div>
    </div>
  );
}

export default Ratings;
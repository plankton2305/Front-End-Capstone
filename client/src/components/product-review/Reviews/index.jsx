import { useState, useEffect } from 'react';
import Reviews from '../../../api/reviews.js';
import Review from './Review/index.jsx';
import Dropdown from './Dropdown/index.jsx';
import CreateReview from './Create-Review/index.jsx';


const ReviewsList = ({ productId }) => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    Reviews.listReviews(productId)
      .then((response) => {
        // console.log(response.data);
        setReviewList(response.data.results);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="flex-1">
      <h3>
        REVIEWS
      </h3>
      <Dropdown />
      <div>
        {
          reviewList.map((review) => {
            return <Review review={review}/>
          })
        }
      </div>
      <CreateReview productId={productId}/>
    </div>
  );
}

export default ReviewsList;
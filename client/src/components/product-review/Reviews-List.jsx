import { useState, useEffect } from 'react';
import Reviews from '../../api/reviews.js';

const ReviewsList = ({ productId }) => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    Reviews.listReviews(productId)
      .then((response) => {
        console.log(response.data);
        setReviewList(response.data.results);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h3>
        REVIEWS
      </h3>
      <div>
        {
          reviewList.map((review) => {
            return <p>{review.body}</p>;
          })
        }
      </div>
    </div>
  );
}

export default ReviewsList;
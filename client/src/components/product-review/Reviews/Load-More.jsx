import Reviews from '../../../api/reviews.js';
import { useState } from 'react';

const LoadMore = ({ productId, reviewList, setReviewList }) => {
  const [pageNum, setPageNum] = useState(2);

  return (
    <button
      className="btn border-gray-300 shadow"
      onClick={(e) => {
        Reviews.listReviews(productId, 'relevant', 5, pageNum)
          .then((response) => {
            console.log(response.data);
            setPageNum(pageNum + 1);

            setReviewList(reviewList.concat(response.data.results));
          })
      }}
    >
      Load More
    </button>
  )
};

export default LoadMore;
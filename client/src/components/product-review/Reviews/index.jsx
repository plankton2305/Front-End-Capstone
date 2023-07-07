import { useState, useEffect } from 'react';
import Reviews from '../../../api/reviews.js';
import Review from './Review/index.jsx';
import Dropdown from './Dropdown/index.jsx';
import CreateReview from './Create-Review/index.jsx';
import LoadMore from './Load-More.jsx';


const ReviewsList = ({ productId }) => {
  const [reviewList, setReviewList] = useState([]);
  const [sortBy, setSortBy] = useState('relevant');

  const sortOptions = {
    'newest': 'Newest Reviews',
    'helpful': 'Most Helpful Reviews',
    'relevant': 'Most Relevant Reviews'
  }

  useEffect(() => {
    Reviews.listReviews(productId, sortBy)
      .then((response) => {
        // console.log(response.data);
        setReviewList(response.data.results);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="flex-1 ml-[128px]">
      <h3 className="text-xl font-sans font-semibold my-[16px]">
        {sortOptions[sortBy]}
      </h3>
      <Dropdown sortBy={sortBy} setSortBy={setSortBy}/>
      <div>
        {
          reviewList.map((review) => {
            return <Review review={review}/>
          })
        }
      </div>
      <div className="flex">
        <LoadMore productId={productId} reviewList={reviewList} setReviewList={setReviewList}/>
        <CreateReview productId={productId}/>
      </div>
    </div>
  );
}

export default ReviewsList;
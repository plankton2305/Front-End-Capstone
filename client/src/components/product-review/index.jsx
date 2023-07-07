import { useState, useEffect } from 'react';
import Ratings from './Ratings/index.jsx';
import ReviewsList from './Reviews/index.jsx';

const Review = ({ productId }) => {

  return (
    // Someting For Ratings
    // Something For Reviews
    <section className="mx-auto py-16 w-[66%] flex" id="ratings-and-reviews">
      <Ratings productId={productId} />
      <ReviewsList productId={productId} />
    </section>
  );
}

export default Review;6
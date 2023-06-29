import { useState, useEffect } from 'react';
import Ratings from './Ratings/index.jsx';
import ReviewsList from './Reviews/index.jsx';

const Review = ({ productId }) => {

  return (
    // Someting For Ratings
    // Something For Reviews
    <section>
      <Ratings productId={productId} />
      <ReviewsList productId={productId} />
    </section>
  );
}

export default Review;
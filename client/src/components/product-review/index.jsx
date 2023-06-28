import { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import ReviewsList from './Reviews-List.jsx';

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
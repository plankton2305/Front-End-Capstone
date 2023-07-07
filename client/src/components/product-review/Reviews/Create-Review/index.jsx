import SearchBar from './Search-Bar.jsx';
import ReviewForm from './Review-Form.jsx';

import { useState } from 'react';

const CreateReview = ({ productId }) => {
  const [ formIsOpen, setFormIsOpen ] = useState(false);

  return (
    <div>
      <label for="review-form-modal" className="btn border-gray-300 shadow">Create Review</label>
      <ReviewForm productId={productId} />
    </div>
  );
};

export default CreateReview;

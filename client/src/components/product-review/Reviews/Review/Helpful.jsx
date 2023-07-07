import Reviews from '../../../../api/reviews.js';
import { useState } from 'react';

const Helpful = ({ reviewId, helpfulness }) => {
  const [helpfulVal, setHelpfulVal] = useState(helpfulness);

  return (
    <div className="flex flex-row">
      <button
        className="btn btn-sm border-gray-300 shadow-sm"
        onClick={(e) => {
          // make call to api
          Reviews.markHelpful(reviewId)
            .then((response) => {
              console.log(helpfulVal);
              console.log(response)
              setHelpfulVal(helpfulVal + 1);
            })
            .catch((err) => {
              console.log(err);
            })
        }}
      >
        Helpful?
        <span className="font-normal">
          ({helpfulVal})
        </span>
      </button>
    </div>
  );
};

export default Helpful;
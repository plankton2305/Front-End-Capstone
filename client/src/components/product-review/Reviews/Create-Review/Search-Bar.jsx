import { useState } from 'react';
import Reviews from '../../../../api/reviews.js';

const SearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <div classname="h-4">
      <input
        className="input input-bordered h-full"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn h-full"
        onClick={(e) => {
          e.preventDefault();

          const data = {

          }

          // create post
          Reviews.addReview()
        }}
      >
        Post
      </button>
    </div>
  );
}

export default SearchBar;
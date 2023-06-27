import { useState, useEffect } from 'react';

const StarRating = () => {

  const [starVal, setStarVal] = useState(3.9);

  useEffect(() => {
    // make api call
    // get rating value on initial render
    // set starVal
    console.log('Rendering Stars');
  }, [])

  const renderStars = () => {
    const fullStars = Math.floor(starVal);
    const halfStar = starVal - fullStars >= 0.5 ? true: false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    let stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span className="star-full">F</span>);
    }

    if (halfStar) {
      stars.push(<span className="star-half">H</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span className="star-empty">E</span>);
    }

    return stars;
  }

  return (
    <div className="Star-Rating">
      <p>
        {/* Rating Value Goes Here (Given from API Call)*/}
        {/* Example Value */}
        {starVal}
      </p>
      <div>
        {/* Render Stars Here (Checked or Unchecked based on API Call)*/}
        {renderStars()}
      </div>
    </div>
  )
}

export default StarRating;


// <span className="star-full">V</span>
// <span className="star-full">V</span>
// <span className="star-full">V</span>
// <span className="star-half">V</span>
// <span className="star-empty">V</span>
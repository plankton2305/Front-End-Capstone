import { useState, useEffect } from 'react';

const StarRating = ({ reviewMeta }) => {
  //const [starVal, setStarVal] = useState(3.9);
  //const [averageRating, setAverageRating] = useState(0);

  // useEffect(() => {
  //   const roundedAverage = Math.round(calculateAverage(reviewMeta.ratings) * 10) / 10;
  //   setAverageRating(roundedAverage);

  //   // Products.getProducts()
  //   //   .then((response) => {
  //   //     console.log('response:\n', JSON.stringify(response, null, 2));
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   })
  //   //console.log('products data:\n', JSON.stringify(products, null, 2));
  //   //console.log('Rendering Stars');
  // }, [])

  const calculateAverage = (ratings) => {
    let sum = 0;
    let numOfRatings = 0;
    for (const val in ratings) {
      sum += Number(val) * ratings[val];
      numOfRatings += Number(ratings[val]);
    }

    console.log(numOfRatings)
    return numOfRatings ? ( sum / numOfRatings ) : 0;
  }

  const averageRating = Math.round(calculateAverage(reviewMeta.ratings) * 10) / 10;

  const renderStars = () => {
    //const averageRating = Math.round(calculateAverage(reviewMeta.ratings) * 10) / 10;

    const fullStars = Math.floor(averageRating);
    const halfStar = averageRating - fullStars >= 0.5 ? true: false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    let stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span className="star-full">F-</span>);
    }

    if (halfStar) {
      stars.push(<span className="star-half">H-</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span className="star-empty">E-</span>);
    }

    return stars;
  }


  return (
    <div className="Star-Rating">
      <p>
        {/* Rating Value Goes Here (Given from API Call)*/}
        {/* Example Value */}
        {averageRating}
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
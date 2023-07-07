import { useState, useEffect } from 'react';

export const renderStars = (averageRating) => {
  //const averageRating = Math.round(calculateAverage(reviewMeta.ratings) * 10) / 10;

  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating - fullStars >= 0.5 ? true: false;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  let stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4 w-4 flex flex-row"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>);
  }

  if (halfStar) {
    stars.push(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-4 w-4 flex flex-row"><path d="M341.5 13.5C337.5 5.2 329.1 0 319.9 0s-17.6 5.2-21.6 13.5L229.7 154.8 76.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L174.2 328.4 148 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L465.6 328.4 576.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L410.1 154.8 341.5 13.5zM320 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L423 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L331.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z"/></svg>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4 w-4 flex flex-row"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>);
  }

  return (
    <div className="flex">
      {stars}
    </div>
  );
}

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

    return numOfRatings ? ( sum / numOfRatings ) : 0;
  }

  const averageRating = Math.round(calculateAverage(reviewMeta.ratings) * 10) / 10;

  return (
    <div className="Star-Rating">
      <p>
        {/* Rating Value Goes Here (Given from API Call)*/}
        {/* Example Value */}
        {averageRating}
      </p>
      <div>
        {/* Render Stars Here (Checked or Unchecked based on API Call)*/}
        {renderStars(averageRating)}
      </div>
    </div>
  )
}

export default StarRating;
//export default renderStars;


import StarRating from './Star-Rating.jsx';

const Ratings = () => {
  return (
    <div>
      {/* Entire left sidebar should be floated to the left and kept fixed relative to ratings */}
      <div>
        {/* Head of Widget */}
        <h3>
          RATINGS & REVIEWS
        </h3>
        <StarRating />
      </div>
      <div>
        {/* Bar Graph Representation of Ratings Goes Here */}
        <p>Bar Graph Goes Here</p>
      </div>
      <div>
        <p>Fit Ratings Go Here</p>
        {/* Fit Ratings */}
      </div>
    </div>
  );
}

export default Ratings;
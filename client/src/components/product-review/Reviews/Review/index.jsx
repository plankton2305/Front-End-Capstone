import ReviewBody from './Body.jsx';
import Summary from './Summary.jsx';
import Header from './Header.jsx';
import Response from './Response.jsx';
import Helpful from './Helpful.jsx';

const Review = ({ review }) => {
  return (
    <div className="my-4">
      <Header reviewerName={review.reviewer_name} rating={review.rating} date={review.date}/>
      <Summary summary={review.summary}/>
      <ReviewBody reviewBody={review.body}/>
      {
        review.response && (
          <Response response={review.response} />
        )
      }
      <Helpful />
    </div>
  )
}

export default Review;


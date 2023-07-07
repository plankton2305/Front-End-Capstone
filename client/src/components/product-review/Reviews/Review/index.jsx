import ReviewBody from './Body.jsx';
import Summary from './Summary.jsx';
import Header from './Header.jsx';
import Response from './Response.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';

const Review = ({ review }) => {
  return (
    <div className="pb-3 mb-3 border-b border-gray-400">
      <Header reviewerName={review.reviewer_name} rating={review.rating} date={review.date}/>
      <Summary summary={review.summary}/>
      <ReviewBody reviewBody={review.body}/>
      {
        review.response && (
          <Response response={review.response} />
        )
      }
      <div className="flex space-x-4">
        <Helpful reviewId={review.review_id} helpfulness={review.helpfulness}/>
        <Report />
      </div>
    </div>
  )
}

export default Review;


import { renderStars } from '../../Ratings/Star-Rating.jsx';

const formatDate = (dateString) => {
  const config = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString).toLocaleDateString('en-US', config);
  console.log(`DATE:::::::::${date}`);
  return date === 'Invalid Date' ? 'Unknown' : date;
};

const Header = ({reviewerName, rating, date}) => {
  return (
    <div>
      <span className="mx-[10px]">{renderStars(rating)}</span>
      <span className="mx-[10px]">{reviewerName}</span>
      <span className="mx-[10px]">{formatDate(date)}</span>
    </div>
  );
};

export default Header;

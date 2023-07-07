import { renderStars } from '../../Ratings/Star-Rating.jsx';

const formatDate = (dateString) => {
  const config = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString).toLocaleDateString('en-US', config);
  console.log(`DATE:::::::::${date}`);
  return date === 'Invalid Date' ? 'Unknown' : date;
};

const Header = ({reviewerName, rating, date}) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-row">{renderStars(rating)}</div>
      <div className="flex flex-row">
        <span className="mx-[10px]">{reviewerName}</span>
        <span>|</span>
        <span className="mx-[10px]">{formatDate(date)}</span>
      </div>
    </div>
  );
};

export default Header;

import { renderStars } from '../../Ratings/Star-Rating.jsx';

const Header = ({reviewerName, rating, date}) => {
  return (
    <div>
      <span className="mx-[10px]">{renderStars(rating)}</span>
      <span className="mx-[10px]">{reviewerName}</span>
      <span className="mx-[10px]">{date}</span>
    </div>
  );
};

export default Header;

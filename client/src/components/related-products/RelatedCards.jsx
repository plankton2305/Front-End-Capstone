const React = require('react');

const RelatedCards = () => {

  // Rough draft for html structure
  return (
    <div class='related-card'>
      <a href='PLACE PRODUCT LINK HERE'>
        <div class='product-image'>
          <img src='PREVIEW IMAGE SRC HERE' alt='Product Preview'></img>
          <div class='thumbnail-carousel'>
            <img src='THUMBNAIL1 SRC HERE' alt='Thumbnail 1'></img>
            <img src='THUMBNAIL2 SRC HERE' alt='Thumbnail 2'></img>
            <img src='THUMBNAIL3 SRC HERE' alt='Thumbnail 3'></img>
            <img src='THUMBNAIL4 SRC HERE' alt='Thumbnail 4'></img>
          </div>
        </div>
        <div class='product-info'>
          <div class='category'>Product Category</div>
          <div class='name'>Product Name</div>
          <div class='price'>
            <span class='sale-price'>Sale Price</span>
            <span class='original-price'>Original Price</span>
          </div>
          <div class='rating'>
            <span class='STARS GO HERE'></span>
          </div>
        </div>
      </a>
      <button class='action-button'></button>
    </div>
  );
};

export default RelatedCards;
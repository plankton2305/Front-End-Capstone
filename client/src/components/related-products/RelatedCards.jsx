const {useEffect, useState} = require('react');
const Products = require('../../api/products.js');


const RelatedCards = ({productStyles}) => {
  console.log('GIVE ME STYLES', productStyles);

  const style1 = "text-3xl font-bold underline";

  // Rough draft for html structure
  return (
    <ul>
      <h1 className={style1}>
        Hello world!
      </h1>
      {productStyles.map((product, index) => (
        <aside key={index}>
        <div className='related-card'>
          {/* <a href='PLACE PRODUCT LINK HERE'> */}
            <div className='product-image'>
              {product.styles && product.styles.photos && product.styles.photos[0].url ? (
              <img
              src={product.styles.photos[0].url}
              alt='Product Preview'
              style={{width: '120px', height: 'auto'}}
              />
              ) : (
                <span>NO IMAGE AVAILABLE</span>
              )}
            </div>
            <div className='product-info'>
              <div className='category'>{product.category}</div>
              <div className='name'>{product.product.name}</div>
              <div className='price'>
                {product.styles && product.styles.sale_price ? (
                  <span className='sale-price'>
                    <s>${product.product.default_price} </s>
                     ${product.styles.sale_price}
                    </span>
                ) : (
                  <span className='original-price'>${product.product.default_price}</span>
                )}
              </div>
              <div className='rating'>
                <span className='STARS GO HERE'>☆☆☆☆☆</span>
              </div>
            </div>
          {/* </a> */}
          <button className='action-button'></button>
        </div>
      </aside>
      ))}
    </ul>
  );
};

export default RelatedCards;
import {useState, useEffect} from "react";
import StyleSelector from './StyleSelector.jsx';

const Overview = ({id, prop2, prop3}) => {

  //placeholderDATA
  const [currProd, setCurrProd] = useState(
    {
      "id": 11,
      "name": "Air Minis 250",
      "slogan": "Full court support",
      "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
      "category": "Basketball Shoes",
      "default_price": "0",
      "features": [
        {
          "feature": "Sole",
          "value": "Rubber"
        },
        {
          "feature": "Material",
          "value": "FullControlSkin"
        },
        {
          "feature": "Feature 3",
          "value": "Feat Value 3"
        },
        {
          "feature": "Feature 4",
          "value": "Feat Value 4"
        },
        {
          "feature": "Feature 5",
          "value": "Feat Value 5"
        }
      ]
    }
  );
  const [currStyleId, setCurrStyleId] = useState(0);
  const [productStyles, setProductStyles] = useState(
    {
      "product_id": "1",
      "results": [
        {
          "style_id": 1,
          "name": "Forest Green & Black",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            },
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            }
          ],
          "skus": {
            "37": {
              "quantity": 8,
              "size": "XS"
            },
            "38": {
              "quantity": 16,
              "size": "S"
            },
            "39": {
              "quantity": 17,
              "size": "M"
            }
          }
        },
        {
          "style_id": 2,
          "name": "Desert Brown & Tan",
          "original_price": "140",
          "sale_price": "0",
          "default?": false,
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_2_photo_number.jpg"
            }
          ],
          "skus": {
            "37": {
              "quantity": 8,
              "size": "XS"
            },
            "38": {
              "quantity": 16,
              "size": "S"
            },
            "39": {
              "quantity": 17,
              "size": "M"
            }
          }
        }
      ]
    }
  );
  let currStyle = productStyles.results[currStyleId];

  //API GETS
  const getCurrProd = () => {};

  //useEffects

  useEffect(()=>{
    console.log('currSTYLE ID IS: ', currStyleId);
    console.log('hahahah')
  }
  ,[currStyleId])

  return (
    <div>
      OverView
      <StyleSelector
      styleArray = {productStyles.results}
      currStyle = {currStyle}
      //CHANGE THIS
      setCurrStyleId = {setCurrStyleId}/>
    </div>
  )
}

export default Overview;
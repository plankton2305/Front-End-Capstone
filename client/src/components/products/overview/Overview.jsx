import {useState, useEffect} from "react";

const Overview = ({id}) => {

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
  const [currStyleId, setCurrStyleId] = useState(1);


  //API GETS
  const getCurrProd = () => {};





  return (
    <div>
      Over VIEW
      {currStyleId}
    </div>
  )
}

export default Overview;
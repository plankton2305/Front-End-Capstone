import { useState, useEffect } from 'react';
import BreakdownGraph from './Breakdown-Graph.jsx';

const getPercentage = (rating) => {
  return Math.round((Number(rating) / 5) * 100);
};

const FitBreakdown = ({ reviewMeta }) => {

  const renderGraph = (characteristics = {}) => {
    let elements = [];
    console.log(`CHARACTERISTICS:::::::${JSON.stringify(characteristics, null, 2)}`)

    for (let key in characteristics) {
      elements.push(
      <div>
        <p>{key}</p>
        <BreakdownGraph averageRating={characteristics[key].value}/>
      </div>)
    }

    return elements;
  };

  return (
    <div>
      {renderGraph(reviewMeta.characteristics)}
    </div>
    // Some sort of graph bar, split into 3 pieces representing the percentage of a value between 0 and 5
  );
};

export default FitBreakdown;

{/* <div className="w-full h-2 bg-[#d4d4d4] rounded">
  <BreakdownGraph />
  <BreakdownGraph />
  <BreakdownGraph />
  <BreakdownGraph />
  <BreakdownGraph />
</div> */}

// <table>
//   <tbody>
//     <tr>
//       <td>
//         <div className="w-60 h-2 bg-[#d4d4d4] rounded">
//           <BreakdownGraph />
//         </div>
//       </td>
//     </tr>
//   </tbody>
// </table>
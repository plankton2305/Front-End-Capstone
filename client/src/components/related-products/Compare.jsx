const { useState } = require('react');
import React from 'react';
import Products from '../../api/products.js';
import _ from 'underscore';
import { saveToCloset } from './accessYourCloset.js';

const Compare = ({ relatedId, currentDetails, setUpdateSaved, showCompare, setShow }) => {
  let longest = undefined;
  let shortest = undefined;

  if (relatedId.product.features.length > currentDetails.product.features.length) {
    longest = relatedId.product.features;
    shortest = currentDetails.product.features;
  } else {
    longest = currentDetails.product.features;
    shortest = relatedId.product.features;
  }

  let filteredArray = longest.filter(longValue => shortest.some(shortValue => shortValue.feature === longValue.feature));

  let uniqRelatedId = relatedId.product.features.filter(value => filteredArray.every(filterValue => filterValue.feature !== value.feature));
  let uniqCurrentDetails = currentDetails.product.features.filter(value => filteredArray.every(filterValue => filterValue.feature !== value.feature));

  const handleSubmitClick = () => {
    saveToCloset(relatedId);
    showCompare(); // close window on add
  };

  return (
    <React.Fragment>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className='text-center'>{currentDetails.product.name}</th>
              <th></th>
              <th className='text-center'>{relatedId.product.name}</th>
            </tr>
          </thead>
          <tbody>
            {filteredArray.map((detail, index) => (
              <tr className="hover" key={index}>
                <td className='text-center'>✔</td>
                <td className='text-center'>
                  {detail.value !== null ? detail.value + ' ' + detail.feature : detail.feature}
                </td>
                <td className='text-center'>✔</td>
              </tr>
            ))}
            {uniqCurrentDetails.map((detail, index) => (
              <tr className="hover" key={index}>
                <td className='text-center'>✔</td>
                <td className='text-center'>
                  {detail.value !== null ? detail.value + ' ' + detail.feature : detail.feature}
                </td>
                <td className='text-center'></td>
              </tr>
            ))}
            {uniqRelatedId.map((detail, index) => (
              <tr className="hover" key={index}>
                <td className='text-center'></td>
                <td className='text-center'>
                  {detail.value !== null ? detail.value + ' ' + detail.feature : detail.feature}
                </td>
                <td className='text-center'>✔</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-center'>
          <button className="btn mt-5" onClick={handleSubmitClick}>Add</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Compare;
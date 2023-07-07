import {useState, useEffect} from "react";
import StyleButton from './StyleButton.jsx';

const StyleSelector = ({styleArray, currStyle, setCurrStyleIndex}) => {
  let buttIndex = -1;

  const renderSelectors = () => {
    let tableArr = [];
    let trArr = [];
    let tempRow = <tr></tr>;
    for (let i = 0; i < styleArray.length; i++) {
      let cell = <td key = {i}><StyleButton
        style = {styleArray[i]}
        setCurrStyleIndex = {setCurrStyleIndex}
        buttIndex = {buttIndex += 1}
        currStyleId = {currStyle.style_id}/></td>;

      trArr.push(cell);

      if (i % 4 === 3 || i === styleArray.length - 1) {
        tableArr.push(<tr key = {`${i}tr`}>{trArr}</tr>);
        trArr = [];
      }
    }
    return tableArr;
  };

  return (
    <>
      <div>
        <b>Style &gt;</b> {currStyle.name}
      </div>
      <br></br>
      <table>
        <tbody>
          {renderSelectors()}
        </tbody>
      </table>
    </>
  );
};

export default StyleSelector;
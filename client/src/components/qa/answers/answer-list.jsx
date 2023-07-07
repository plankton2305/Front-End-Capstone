import { useState } from 'react';
import _ from 'underscore';

import Answer from './answer.jsx';

const sortAnswers = (answers) => {
  // let initial = Object.entries(answers);

  //sort by helpfulness

  let sorted = _.sortBy(answers, (a, b) => {
    if (a['helpfulness'] > b['helpfulness']) { return -1; }
    if (a['helpfulness'] < b['helpfulness']) { return 1; }
    return 0;
  });

  //sort by seller first
  sorted = sorted.sort((a, b) => {
    let aName = a.answerer_name;
    let bName = b.answerer_name;

    if (aName === 'Seller') { return -1; }
    if (bName === 'Seller') { return 1; }
    return 0;
  });

  return sorted;
};

const AnswerList = ({ answers }) => {
  const [limitAnswers, setlimitAnswers] = useState(true);
  const defaultNumberOfAnswers = 2;
  const sortedAnswers = sortAnswers(answers);

  return (
    <>
      {
        sortedAnswers.map((answer, index) => {
          let visibility = limitAnswers && index >= defaultNumberOfAnswers ? 'hidden' : '';

          return (
            <div key={ index } className={ visibility }>
              <Answer answer={answer} />
            </div>
          );
        })
      }
      {
        sortedAnswers.length > defaultNumberOfAnswers &&
        <button className={'pl-6'} onClick={() => { setlimitAnswers(!limitAnswers); }}>
          {limitAnswers ? 'See more answers' : 'Collapse answers'}
        </button>
      }
    </>
  );
};

export default AnswerList;
import { useState } from 'react';

import Questions from '../../../api/questions.js';
import AddAnswer from './addanswer.jsx';
import AnswerList from '../answers/answer-list.jsx';

const Question = ({ question, productName }) => {
  const [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness);

  //!! convert answers to array
  question.answers = Object.entries(question.answers);

  const helpfulYesClickHandler = (e) => {
    setHelpfulCount(helpfulCount + 1);
    e.target.setAttribute('disabled', true);
    Questions.markQuestionHelpful(question.question_id);

  };

  return (
    <>
      <div className="flex justify-between mb-2">
        <strong className="text-lg mt-auto mb-auto">Q: <span>{ question.question_body }</span></strong>
        <div>
          <span className="pr-2">Helpful?</span>
          <button className="pr-2" onClick={(e) => helpfulYesClickHandler(e) }><span className="underline">Yes</span> ({ helpfulCount })</button> |
          <AddAnswer product={'hello'} question={'world'}/>
        </div>
      </div>

      { question.answers.length > 0
        ? <AnswerList
          answers={ question.answers }
          style={{maxHeight: '50vh', overflowY: 'scroll' }}
        />
        : <div className="ml-7">
          <span>No Answers Yet</span>
        </div>

      }
    </>
  );
};

export default Question;
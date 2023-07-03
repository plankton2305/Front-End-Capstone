import { useState } from 'react';
import _ from 'underscore';

import Questions from '../../api/questions.js';
import AddAnswer from './addanswer.jsx';

const Answer = ({ answer, isSeller }) => {
  const formattedDate = new Date(answer.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const [helpfulCount, setHelpfulCount] = useState(answer.helpfulness);
  const [markedForInternalReview, setMarkedForInternalReview] = useState(false);

  const helpfulYesClickHandler = (e) => {
    setHelpfulCount(helpfulCount + 1);
    e.target.setAttribute('disabled', true);
    Questions.markAnswerHelpful(answer.id);

  };

  const reportClickHandler = (e) => {
    e.target.setAttribute('disabled', true);
    setMarkedForInternalReview(true);
    Questions.reportAnswer(answer.id);
  };

  return (
    <>
      <strong>A: <span>{ answer.body }</span></strong>

      <div className="answer-photos">
        {
          answer.photos.map((photo, index) => {
            return <img key={ index } src={ photo } alt="(image)" style={{maxWidth: '100px', 'display': 'inline-block'}}/>;
          })
        }
      </div>

      <span className={isSeller ? 'font-bold' : ''}>by { answer.answerer_name },</span>
      <span>{ formattedDate } | </span>
      <span>Helpful?
        <button onClick={(e) => helpfulYesClickHandler(e) }>Yes ({ helpfulCount })</button> |
      </span>
      <button onClick={(e) => reportClickHandler(e) }>{markedForInternalReview ? 'Reported' : 'Report'}</button>
    </>
  );
};

const AnswerList = ({ answers, seller }) => {
  const [limitAnswers, setlimitAnswers] = useState(true);
  const defaultNumberOfAnswers = 2;
  const sortedByHelpfulness = _.sortBy(Object.entries(answers), 'helpfulness').reverse();
  const sortedSellersFirst = sortedByHelpfulness.sort((a, b) => {
    if (a[1].answerer_name === seller) {
      return -1;
    }
    if (b[1].answerer_name === seller) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      {
        sortedSellersFirst.map(([key, value], index) => {
          let visibility = index >= defaultNumberOfAnswers ? 'hidden' : '';
          let isSeller = seller === value.answerer_name;
          console.log(index, defaultNumberOfAnswers);
          if (!limitAnswers) {
            visibility = '';
          }

          return (
            <div key={ index } className={ visibility }>
              <Answer answer={value} isSeller={ isSeller } />
            </div>
          );
        })
      }
      {
        sortedSellersFirst.length > defaultNumberOfAnswers &&
        <button
          onClick={() => { setlimitAnswers(!limitAnswers); }}
        >{limitAnswers ? 'See more answers' : 'Collapse answers'}</button>
      }
    </>
  );
};

const Question = ({ question, seller, product }) => {
  const [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness);
  const [markedForInternalReview, setMarkedForInternalReview] = useState(false);

  console.log('Question Product', product);

  const helpfulYesClickHandler = (e) => {
    setHelpfulCount(helpfulCount + 1);
    e.target.setAttribute('disabled', true);
    Questions.markQuestionHelpful(question.question_id);

  };

  const reportClickHandler = (e) => {
    console.log(question);
    e.target.setAttribute('disabled', true);
    setMarkedForInternalReview(true);
    Questions.reportQuestion(question.question_id);
  };

  return (
    <>
      <strong>Q: <span>{ question.question_body }</span></strong>
      <span>Helpful?
        <button onClick={(e) => helpfulYesClickHandler(e) }>Yes ({ helpfulCount })</button> |
        <AddAnswer />
      </span>
      {/* <button onClick={(e) => reportClickHandler(e) }>{markedForInternalReview ? 'Reported' : 'Report'}</button> */}
      <AnswerList answers={ question.answers } seller={ seller } style={{maxHeight: '50vh', overflowY: 'scroll' }}/>
    </>
  );
};

const QuestionList = ({ filter, questions, seller }) => {
  const [limitQuestions, setlimitQuestions] = useState(true);
  const defaultNumberOfQuestions = 4;
  const sortedQuestions = _.sortBy(questions, 'question_helpfulness').reverse();

  return (
    <>
      {
        sortedQuestions.map((question, index) => {
          let visibility = index >= defaultNumberOfQuestions ? 'hidden' : '';
          if (!limitQuestions) {
            visibility = '';
          }

          return (
            <div key={index} className={ visibility }>
              <Question key={ index } question={ question } filter={ filter } seller={ seller } />
            </div>
          );
        })
      }
      { sortedQuestions.length === 0 && <button>Submit a new question</button> }
      {
        sortedQuestions.length > defaultNumberOfQuestions &&
        <button
          onClick={() => { setlimitQuestions(!limitQuestions); }}
        >More Answered Questions</button>
      }

    </>
  );
};

export default QuestionList;
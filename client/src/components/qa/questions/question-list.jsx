import { useState, useEffect } from 'react';
import _ from 'underscore';

import Question from './question.jsx';
import AddQuestion from '../addquestion.jsx';

const sortQuestions = (questions) => {
  return _.sortBy(questions, 'question_helpfulness').reverse();
};

const filterQuestions = (questions, filter) => {
  return questions.filter((question) => {
    //filter by search term
    const includesTerm = question.question_body
      .toLowerCase()
      .includes(filter.toLowerCase());

    return includesTerm;
  });
};

const QuestionList = ({ filter, questions, productName, productId, setRerender }) => {
  const [renderQuestions, setRenderQuestions] = useState([]);
  const [limitQuestions, setlimitQuestions] = useState(4);
  const [questionCount, setQuestionCount] = useState(0);

  const sortedQuestions = sortQuestions(questions);

  useEffect(() => {
    let questions = sortedQuestions;
    if (filter.length > 3) {
      questions = filterQuestions(sortedQuestions, filter);
    }

    setQuestionCount(questions.length);

    questions = questions.slice(0, limitQuestions);
    setRenderQuestions(questions);
  }, [questions, filter, limitQuestions]);

  return (
    <>
      {
        renderQuestions.map((question, index) => {
          return (
            <div className="mb-4" key={ index }>
              <Question question={ question } productName={productName} setRerender={setRerender} />
            </div>
          );
        })
      }
      {
        renderQuestions.length < questionCount &&
        <button
          className="btn bg-[transparent] mr-4"
          onClick={() => { setlimitQuestions(limitQuestions + 5); }}
        >More Answered Questions</button>
      }
      <AddQuestion productName={productName} productId={productId} setRerender={setRerender}/>
    </>
  );
};

export default QuestionList;
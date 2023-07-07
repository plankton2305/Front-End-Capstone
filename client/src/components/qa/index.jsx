import { useState, useEffect } from 'react';

// Api
import Questions from '../../api/questions.js';

// Components
import QuestionSearch from './search.jsx';
import QuestionList from './questions/question-list.jsx';
import AddQuestion from './addquestion.jsx';

const QuestionsAndAnswers = ({ product }) => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState('');

  const productId = product.id || null;
  const productName = product.name || '';

  useEffect(() => {
    if (productId) {
      const api = Questions;
      api.getQuestions(productId)
        .then((response) => {
          setQuestions(response.data.results);
        })
        .catch((err) => console.log('errr', err));
    }
  }, []);

  return (
    <>
      <h2 className="mb-4">QUESTIONS & ANSWERS</h2>
      <QuestionSearch setFilter={ setFilter } />
      <QuestionList filter={ filter } questions={ questions } productName={productName} />
    </>
  );
};

export default QuestionsAndAnswers;
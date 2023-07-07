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
    console.log('product', product);
    if (productId) {
      const api = Questions;
      api.getQuestions(productId)
        .then((response) => {
          setQuestions(response.data.results);
        })
        .catch((err) => console.log('errr', err));
    }
  }, [product]);

  return (
    <>
      <h2 className="mb-4 text-2xl">QUESTIONS & ANSWERS</h2>
      <div className="mx-6">
        <QuestionSearch setFilter={ setFilter } />
        <div className="mh-[50vh] overflow-y-auto">
          <QuestionList filter={ filter } questions={ questions } productName={productName} />
        </div>
      </div>
    </>
  );
};

export default QuestionsAndAnswers;
import { useState, useEffect } from 'react';

// Api
import Questions from '../../api/questions.js';

// Components
import QuestionSearch from './search.jsx';
import QuestionList from './questions/question-list.jsx';

const QuestionsAndAnswers = ({ product }) => {
  const [rerender, setRerender] = useState(true);
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
      if (rerender) { setRerender(false); }
    }
  }, [product, rerender]);

  return (
    <>
      <h2 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit mt-5 mb-5">Questions & Answers</h2>
      <div className="mx-6">
        <QuestionSearch setFilter={ setFilter } />
        <div className="px-4 pb-4" style={{maxHeight: '50vh', overflowY: 'auto'}}>
          <QuestionList filter={ filter } questions={ questions } productName={productName} productId={productId} setRerender={setRerender}/>
        </div>
      </div>
    </>
  );
};

export default QuestionsAndAnswers;
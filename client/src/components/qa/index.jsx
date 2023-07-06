import { useState, useEffect } from 'react';

// Api
import Questions from '../../api/questions.js';

// Components
import QuestionSearch from './search.jsx';
import QuestionList from './list.jsx';
import AddQuestion from './addquestion.jsx';

const QuestionsAndAnswers = ({ productId, seller, product }) => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState('');
  console.log('QuestionsAndAnswers', JSON.stringify(product));

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
      <h2>QUESTIONS & ANSWERS</h2>
      <QuestionSearch setFilter={ setFilter } />
      {/* <div style={{maxHeight: '20vh', overflowY: 'scroll', overflow: 'clip'}}> */}
      <QuestionList filter={ filter } questions={ questions } seller={ seller } product={product}/>
      {/* </div> */}
      {/* <AddQuestion /> */}
    </>
  );
};

export default QuestionsAndAnswers;
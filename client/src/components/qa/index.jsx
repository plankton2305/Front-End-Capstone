import { useState, useEffect } from 'react';

//Api
import Questions from '../../api/questions.js';

//Components
import QuestionSearch from './search/index.jsx';
import QuestionList from './list/index.jsx';
// import QuestionActions from './actions';


const QuestionsAndAnswers = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (productId) {
      const api = Questions;
      api.getQuestions(productId)
        .then((response) => {
          console.log('getQuestions', response);
          setQuestions(response.data.results);
        })
        .catch((err) => console.log('errr', err));
    }
  }, []);

  useEffect(() => {
    console.log('filter: ', filter);
  }, [filter]);


  return (
    <>
      <h2>QUESTIONS & ANSWERS</h2>
      <QuestionSearch setFilter={ setFilter } />
      <QuestionList filter={ filter } questions={ questions } />
      {/* <QuestionActions /> */}
    </>
  );
};

export default QuestionsAndAnswers;
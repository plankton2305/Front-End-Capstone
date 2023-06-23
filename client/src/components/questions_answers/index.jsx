import React from 'react';

// const getData = require('../../helpers/getData');
import getData from '../../helpers/getData';


const HelpfulYes = () => {

  return (
    <>
    <a>Yes <span>(0)</span></a>
    </>
  )
}

const HelpfulAddAnswer = () => {

  return (
    <>
    <a>Add Answer</a>
    </>
  )
}

const HelpfulReport = () => {

  return (
    <>
    <a>Report</a>
    </>
  )
}

const Helpful = () => {

  return (
    <>
      Helpful?
      <HelpfulYes />
      <HelpfulAddAnswer />
    </>
  )
}

const QuestionSearch = () => {

  return (
    <>
    <div>
      <div className="input-container">
        <input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <i></i>
      </div>
    </div>
    </>
  )
}

const Questions = () => {

  return (
    <>
    Q: <span>Dummy Question Stuff</span>
    <Helpful />
    </>
  )
}

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = React.useState([]);
  const endpoint = 'qa/questions';
  const options = {
    product_id: '2',
    'page': '1'
  };

  React.useEffect(() => {

    getData(endpoint, options)
    .then((res) => console.log(res))
  }, [])


  return (
    <>
    <h2>QUESTIONS & ANSWERS</h2>
    <QuestionSearch />
    <Questions />
    </>
  )
}

export default QuestionsAndAnswers;
const AnswerList = ({ answers }) => {
  return (
    <>
    {
      Object.entries(answers).map(([key, value], index) => {
        return (
          <div key={ index }>
            <strong>A: <span>{ value.body }</span></strong>
            <br />
            <span>by { value.answerer_name }, { value.date } | </span>
            Helpful? <a href="#">Yes</a> ({ value.helpfulness }) | <a href="#">Report</a>
          </div>
        )
      })
    }
    </>
  )
}

const Question = ({ question, filter }) => {
  // console.log(question);
  return (
    <>
    <strong>Q: <span>{ question.question_body }</span></strong>
    Helpful? <a href="#">Yes</a> ({ question.question_helpfulness }) | <a href="#">Add Answer</a>
    <br />
    <AnswerList answers={ question.answers }/>
    </>
  )
}

const QuestionList = ({ filter, questions }) => {
  // console.log(questions);

  return (
    <>
    {
      questions?.map((question, index) => {
        return <Question key={ index } question={ question } filter={ filter }/>
      })
    }
    </>
  )
}

export default QuestionList;
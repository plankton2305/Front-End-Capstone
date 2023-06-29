
const QuestionSearch = ({ setFilter }) => {

  const onChangeHandler = (e) => {
    let val = e.target.value.length >= 3 ? e.target.value : '';
    setFilter(val);
  };

  return (
    <div>
      <input
        onChange={ onChangeHandler }
        placeholder="Have a question? Search for answers…"
      />
      <i></i>
    </div>
  );
};

export default QuestionSearch;
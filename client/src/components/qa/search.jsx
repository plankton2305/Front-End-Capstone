const QuestionSearch = ({ setFilter }) => {

  const onChangeHandler = (e) => {
    let val = e.target.value.length >= 3 ? e.target.value : '';
    setFilter(val);
  };

  return (
    <div className="border border-black text-xl relative mb-4">
      <input
        className="px-6 py-4 w-full h-full bg-transparent border-none"
        onChange={ onChangeHandler }
        placeholder="Have a question? Search for answers…"
      />
      <span className="float-right absolute right-6 top-[25%]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </span>
    </div>
  );
};

export default QuestionSearch;
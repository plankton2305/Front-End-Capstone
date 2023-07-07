import { useState } from 'react';

import Questions from '../../../api/questions.js';

const QuestionForm = ({ id, setOpen, productName, setRerender}) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    let form = e.target.form;
    let isValid = form.reportValidity();
    let data = {
      body: body,
      name: name,
      email: email,
      product_id: id
    };

    if (!isValid) {
      return;
    }

    Questions.postQuestion(data).then((res) => {
      console.log('Question Posted', res);
      setRerender(true);
    });

    setOpen(null)
  };

  return (
    <form>
      <button
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={() => {setOpen(false)}}>✕
      </button>

      <h3 className="font-bold text-lg">Sumbit your question</h3>
      <h4 className="font-bold text-sm mb-4">{productName}</h4>

      <label>
        <h4 className="font-bold text-sm mb-2">Nickname</h4>
        <input
          className="p-2 w-full"
          type="text"
          maxLength="60"
          placeholder="Example: jack543!"
          required
          onChange={(e) => setName(e.target?.value || '')}
        />
      </label>

      <label className="p-2">
        <h4 className="font-bold text-sm mb-2">Email</h4>
        <input
          className="p-2 w-full"
          type="email"
          maxLength="60"
          placeholder="jack543@email.com"
          required
          onChange={(e) => setEmail(e.target?.value || '')}
          />
      </label>

      <label className="p-2">
        <h4 className="font-bold text-sm mb-2">Question</h4>
        <textarea
          className="p-2 w-full"
          maxLength="1000"
          placeholder="Why did you like the product or not?"
          required
          onChange={(e) => setBody(e.target?.value || '')}
          style={{resize: 'none'}}
        />
      </label>

      <button
        className="btn float-right mt-4"
        type="submit"
        onClick={submitHandler}>Submit
      </button>
    </form>
  );
};

export default QuestionForm;
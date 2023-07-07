import { useState } from 'react';
import ImageUploader from './imageuploader.jsx';

import Questions from '../../../api/questions.js';

const AnswerForm = ({ id, setOpen, productName, question, setRerender }) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let form = document.getElementById('add-answer-form');
    let isValid = form.reportValidity();
    let data = {
      body: body,
      name: name,
      email: email,
      photos: photos
    };

    console.log(isValid);

    if (!isValid) {
      return;
    }

    Questions.postAnswer(id, data).then((res) => {
      console.log('Answer Posted', res);
      setRerender(true);
    });

    console.log(data);
    setOpen(null)
  };

  return (
    <form id="add-answer-form">
      <button
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={() => {setOpen(false)}}>✕
      </button>

      <h3 className="font-bold text-lg">Sumbit your answer</h3>
      <h4 className="font-bold text-sm mb-4">{productName} : {question}</h4>

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
          placeholder="Why did you like the product or not?"
          required
          onChange={(e) => setEmail(e.target?.value || '')}
          />
      </label>

      <label className="p-2">
        <h4 className="font-bold text-sm mb-2">Answer</h4>
        <textarea
          className="p-2 w-full"
          maxLength="1000"
          required
          onChange={(e) => setBody(e.target?.value || '')}
          style={{resize: 'none'}}
        />
      </label>

      <label className="p-2">
        <h4 className="font-bold text-sm mb-2">Upload Images</h4>
        <ImageUploader setPhotos={setPhotos} photos={photos}/>
      </label>

      <button
        className="btn float-right mt-4"
        type="submit"
        onClick={submitHandler}>Submit
      </button>
    </form>
  );
};

export default AnswerForm;
import { useState } from 'react';
import ImageUploader from './imageuploader.jsx';


const AnswerForm = ({ setOpen, product, question }) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const validate = (e) => {
    e.target.setCustomValidity('Please fill out this field');
  };

  const submitHandler = (e) => {
    let form = document.getElementById('add-answer-form');
    let isValid = form.reportValidity();
    if (isValid) {
      e.preventDefault();
      document.getElementById('add-answer').close();
      let data = {
        body: body,
        name: name,
        email: email,
        photos: photos
      };
      console.log(data);
    }
  };

  return (
    <form>
      <button
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={() => {setOpen(false)}}>✕
      </button>

      <h3 className="font-bold text-lg">Sumbit your answer</h3>
      <h4 className="font-bold text-sm">{product}: {question}</h4>

      <label>Answer
        <textarea
          maxLength="1000"
          required
          onInvalid={validate}
          onChange={(e) => setBody(e.target?.value || '')}
          style={{resize: 'none'}}
        />
      </label>

      <label>
        <input
          type="text"
          maxLength="60"
          placeholder="Example: jack543!"
          required
          onInvalid={validate}
          onChange={(e) => setName(e.target?.value || '')}
        />
        <br />For privacy reasons, do not use your full name or email address
      </label>

      <label>
        <input
          type="email"
          maxLength="60"
          placeholder="Why did you like the product or not?"
          required
          onInvalid={validate}
          onChange={(e) => setEmail(e.target?.value || '')}
          />
        <br />For authentication reasons, you will not be emailed
      </label>

      <label>Upload Images
        <ImageUploader setPhotos={setPhotos} photos={photos}/>
      </label>

      <button
        className="btn"
        type="submit"
        onClick={submitHandler}>Submit
      </button>
    </form>
  );
};

export default AnswerForm;
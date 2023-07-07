import { useState } from 'react';
import Modal from '../modal.jsx';
import AnswerForm from '../forms/answer.jsx';

const AddAnswer = ({product, question}) => {
  const [open, setOpen] = useState(false);

  const Form = () => {
    return (
      <AnswerForm
        setOpen={setOpen}
        productName={product.name}
        question={question.body}
      />
    );
  };

  return (
    <>
      <button className="pl-2 underline" onClick={() => { setOpen(true); }}>
        Add Answer
      </button>
      <Modal Form={Form} open={open}
      />
    </>
  );
};

export default AddAnswer;
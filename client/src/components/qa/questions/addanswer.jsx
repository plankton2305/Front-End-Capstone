import { useState } from 'react';
import Modal from '../modal.jsx';
import AnswerForm from '../forms/answer.jsx';

const AddAnswer = ({id, product, question, setRerender}) => {
  const [showModal, setShowModal] = useState(null);

  const Form = () => {
    return (
      <AnswerForm
        id={id}
        setOpen={setShowModal}
        productName={product}
        question={question}
        setRerender={setRerender}
      />
    );
  };

  return (
    <>
      <button
        className="pl-2 underline"
        onClick={() => { setShowModal(true); }}>
        Add Answer
      </button>
      <Modal Form={Form} showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default AddAnswer;


/**
 *
 *       <button className="pl-2 underline" onClick={() => { setOpen(true); }}>
        Add Answer
      </button>

        const Form = () => {
    return (
      <AnswerForm
        setOpen={setOpen}
        productName={product.name}
        question={question.body}
      />
    );
  };
 *
 */
// const AddQuestion = ({productName, productId}) => {
//   const validate = (e) => {
//     let validityState = e.target.validity;
//     // console.log('attr', e.target.getAttribute('type'));
//     // console.log('validityState', validityState);

//     if (!validityState.valid) {
//       console.log(e);
//       e.target.setCustomValidity('You must enter the following');
//     } else {
//       e.target.setCustomValidity('');
//     }
//   };

//   const clickHandler = (e) => {
//     window['add-question'].close();
//     e.preventDefault();
//   };

//   return (
//     <>
//       <button className="btn bg-[transparent]" onClick={()=>window['add-question'].showModal()}>Ask Your Question</button>

//       <dialog id="add-question" className="modal">
//         <form className="modal-box">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={clickHandler}>✕</button>
//           <h3 className="font-bold text-lg">Ask Your Question</h3>
//           <label>Question<textarea maxLength="1000" style={{resize: 'none'}} required onInvalid={validate}/></label>

//           <label><input type="text" maxLength="60" placeholder="Example: jackson11!" required onInvalid={validate}/><br />For privacy reasons, do not use your full name or email address</label>

//           <label><input type="email" maxLength="60" placeholder="Why did you like the product or not?" required onInvalid={validate}/><br />For authentication reasons, you will not be emailed</label>

//           <button type="submit">Submit</button>
//           <div>About the [Product Name Here]</div>
//         </form>
//       </dialog>
//     </>
//   );
// };


import { useState } from 'react';
import Modal from './modal.jsx';
import QuestionForm from './forms/question.jsx';

const AddQuestion = ({productId, productName, setRerender}) => {
  const [showModal, setShowModal] = useState(null);

  const Form = () => {
    return (
      <QuestionForm
        id={productId}
        setOpen={setShowModal}
        productName={productName}
        setRerender={setRerender}
      />
    );
  };

  return (
    <>
      <button
        className="btn bg-[transparent]"
        onClick={() => { setShowModal(true); }}>
        Ask Your Question
      </button>
      <Modal Form={Form} showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default AddQuestion;
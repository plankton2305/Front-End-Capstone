import { useState } from 'react';

const Modal = ({ Form, showModal, setShowModal }) => {


  return (
    <dialog id="my_modal_3" className="modal" open={showModal}>
      <div method="dialog" className="modal-box">
        <div>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setShowModal(null)}
          >✕</button>
          <Form />
        </div>
      </div>

      <div method="dialog" className="modal-backdrop">
        <button onClick={() => setShowModal(null)}></button>
      </div>
    </dialog>
  );
};

export default Modal;


/**
 *   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const modalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  };

      open &&
    <div id="modal-container" style={modalStyle}>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => {}}>✕</button>
      <div id="modal" style={style}>
        <Form />
      </div>
    </div>


 */
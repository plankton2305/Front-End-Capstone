const Modal = ({ Form, open }) => {
  const style = {
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

  return (
    open &&
    <div id="modal-container" style={modalStyle}>
      <div id="modal" style={style}>
        <Form />
      </div>
    </div>
  );
};

export default Modal;
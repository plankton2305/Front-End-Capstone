const AddAnswer = () => {

  return (
    <>
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Answer</button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Sumbit your answer</h3>
          <h4 className="font-bold text-sm">[Product Name]: [Question Body]</h4>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <input required />
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AddAnswer;
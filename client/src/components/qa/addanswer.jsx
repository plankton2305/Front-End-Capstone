import ImageUploader from "./imageuploader.jsx";

const AddAnswer = () => {
  const validate = (e) => {
    let validityState = e.target.validity;
    // console.log('attr', e.target.getAttribute('type'));
    // console.log('validityState', validityState);

    if (!validityState.valid) {
      console.log(e);
      e.target.setCustomValidity('You must enter the following');
    } else {
      e.target.setCustomValidity('');
    }
  };

  const clickHandler = (e) => {
    document.getElementById('add-answer').close();
    e.preventDefault();
  };

  return (
    <>
      <button className="btn" onClick={()=>document.getElementById('add-answer').showModal()}>Add Answer</button>
      <dialog id="add-answer" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={clickHandler}>✕</button>

          <h3 className="font-bold text-lg">Sumbit your answer</h3>

          <h4 className="font-bold text-sm">[Product Name]: [Question Body]</h4>

          <label>Answer<textarea maxLength="1000" style={{resize: 'none'}} required onInvalid={validate}/></label>
          <label><input type="text" maxLength="60" placeholder="Example: jack543!" required onInvalid={validate}/>For privacy reasons, do not use your full name or email address</label>
          <label><input type="email" maxLength="60" placeholder="Why did you like the product or not?" required onInvalid={validate}/><br />For authentication reasons, you will not be emailed</label>
          <label><ImageUploader /></label>

          <div className="modal-action">
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AddAnswer;
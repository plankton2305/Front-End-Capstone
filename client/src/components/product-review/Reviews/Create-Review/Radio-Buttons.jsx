
const RadioButtons = ({ label, id, ratingDesc }) => {

  const renderButtons = () => {
    const buttonGroup = [];

    for (const key in ratingDesc) {
      const currentDesc = ratingDesc[key];
      buttonGroup.push(
        <div className="grid items-center">
          <label for={`review-form-${label}-${currentDesc}`} className="justify-self-center">{currentDesc}</label>
          <input
              type="radio"
              name={label}
              className="scale-150"
              id={`review-form-${label}-${currentDesc}`}
              key={key}
              >
          </input>
        </div>
      )
    }

    return buttonGroup;
  };

  return (
    <div className="grid grid-cols-5 gap-4">
        {renderButtons()}
    </div>
  )
}

export default RadioButtons;

// className="flex flex-col items-center mr-[10px]"
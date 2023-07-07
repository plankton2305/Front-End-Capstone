const validate = () => {
  const validate = (e) => {
    let validityState = e.target.validity;
    e.target.setCustomValidity('');
    if (!validityState.valid) {
      if (!e.target.type === 'email') {
        e.target.setCustomValidity('You must enter the following');
      }
    } else {
      e.target.setCustomValidity('');
    }
  };

};
import { useState } from 'react';


const TextInput = ({ inputName, placeholder, onChange}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  }

  return (
    <div className="px-36">
      <label for={inputName} className="font-semibold">{inputName}</label><br/>
      <input
        name={inputName}
        className="input input-bordered rounded h-8 w-full border-gray-300 focus:outline-2 focus:outline-[#455f68]"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
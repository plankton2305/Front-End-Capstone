import { useState } from 'react';

const TextArea = ({ inputName, placeholder, onChange}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  }

  return (
    <div className="px-36">
      <label for={inputName} className="font-semibold">{inputName}</label><br/>
      <textarea
        name={inputName}
        className="textarea h-24 textarea-bordered w-full rounded border-gray-300 focus:outline-2 focus:outline-[#455f68]"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      >
      </textarea>
    </div>
  );
}

export default TextArea;
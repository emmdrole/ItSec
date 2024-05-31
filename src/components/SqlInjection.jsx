import React, { useState } from 'react'

const SqlInjection = () => {
  const [inputValue,setInputValue] = useState('');

  function handleChange(e){
     setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Input value:', inputValue);
  };

 

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="content-grow">
      <h3 className="title">Vulnerability:SQL Injection</h3>
      <label>
        Input:
        <input type="text"
        value={inputValue}
        onChange={handleChange}
        />
      </label>
      <button type='submit'>Submit</button>
    </div>
    </form>
    </>
  )
}

export default SqlInjection
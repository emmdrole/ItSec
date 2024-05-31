import React, { useEffect, useState } from 'react'

const Xss = () => {
  
  const [inputValue,setInputValue] = useState('');
  const [xss,setXss] = useState('');

  // we have now to make that on sunbit of the button it creates a new p element that could have scripts inside

  
  function handleChange(e){
    setInputValue(e.target.value);
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("info uploaded",inputValue)
    setXss(inputValue);
  }

  useEffect(() =>{
    if(xss){
      const script = document.createElement('script');
      script.innerHTML = xss;
      document.body.appendChild(script);
    }
  },[xss])

  return (
    <form onSubmit={handleSubmit}>
    <div className="content-grow">
      <h3 className="title">Xss script vulnerability</h3>
      <label>
        Input:
        <input type="text"
        value={inputValue}
        onChange={handleChange}
        />
      </label>
      
      <button type='submit'>Submit</button>
      <div dangerouslySetInnerHTML={{ __html: xss }} />
    </div >
    </form>
  )
}

export default Xss



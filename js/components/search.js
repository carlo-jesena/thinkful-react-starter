import React from 'react';



export default function Search(props) {
  return (

    <div className = 'form'>
      <form>
        <input type = 'text' onChange={props.onInputChange}/>
        <button type = 'submit' onClick={props.onInputSubmit}>Search</button>
      </form>
    </div>
  );
}

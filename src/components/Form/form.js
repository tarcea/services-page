import React, { useState, useEffect } from 'react';


const Form = (props) => {
  const [fieldValue, setFieldValue] = useState("");

  useEffect(() => {
    console.log(fieldValue)
   });

  const getValue = (e) => {
  return setFieldValue(e.target.value)
}


  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} onChange={getValue} value={fieldValue} />
    </div>
  );
}

export default Form;

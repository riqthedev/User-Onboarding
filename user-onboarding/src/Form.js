import React, {useState} from "react";

export default function Form(props) {
  
const {values, change, disabled, errors, submit} = props;
  
  
 

  const onSubmit = (event) => {
    event.preventDefault();

    submit()
  };


  const onChange = (event) => {
  const {name, value, checked} = event.target;
  change(name,value)
 
   
  };

  return (
    <form onSubmit={onSubmit} id="valid">
      <div className="form-container">

        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
        <label>
          Name:
          <input name="name" type="text" onChange={onChange} value={values.name}/>
        </label>

        <label>
          Email:
          <input name="email" type="text" onChange={onChange} value={values.email} />
        </label>

        <label>
          Password:
          <input name="password" type="text" onChange={onChange} value={values.password}/>
        </label>

        <label>
          Did you read the Terms and Conditions?
          <input type="radio" name="terms" value="Yes" checked={values.terms === "Yes"} onChange={onChange} />
          <input type="radio" name="terms" value="No" checked={values.terms === "No"} onChange={onChange}  />
        </label>
        <button className="btn" disabled={disabled}>Submit</button>
      </div>
    </form>
  );
}

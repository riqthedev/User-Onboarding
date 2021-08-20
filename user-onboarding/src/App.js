import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import formSchema from "./formSchema"
import * as yup from "yup";
import Form from "./Form" 
import User from './User';



const initalFormValues = {
  name: "",
  email: "",
  password:"",
  terms: false,
}

const initalFormErrors = {
  name: "",
  email: "",
  password:"",
  terms: "",
}
const initialDisabled = true
const initialUsers = []



function App() {

  const [users, setUser] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initalFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [disabled, setDisabled] =useState(initialDisabled)

  const getUsers = () =>{
    axios.get('https://buddies.com/api/friends')
    .then(res => {
     setUser(res.data)
    }).catch(err =>  console.log(err))

  }

  const postNewUser = newUser =>{
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUser([res.data, ...users])
    }).catch(err => console.error(err))

    setFormValues(initalFormValues)
}

const change = (name, value) => {
  setFormValues({
    ...formValues, [name]:value
  })
}
const formSubmit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: formValues.terms
  }
  postNewUser(newUser)
}


useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  formSchema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])




  
    return (
      <div>
        <div>
          <h1>User OnBoarding</h1>
        </div>

      <Form
      values={formValues}
      submit={formSubmit}
      change={change}
      disabled={disabled}
      errors={formErrors}
     />
      {users.map(user => {
          return ( <User key={user.id} details={user} />)
        })
      }
     

      </div>
       );
 
  }

  




     
  
   

 




export default App;

import React , {useState} from 'react';
import FormInput from './form-input.component';
import axios from 'axios';
import './Homepage.styles.scss';

const HomePage = () => {
 const [credentials, setCredentials] = useState({name:'', id:'', userId:'', password:''})
 
 const handleSubmit = async event =>{
  event.preventDefault();
  const {name,id} = credentials;
   axios.post('https://petstore.swagger.io/v2/pet', {name,id})
    .then(res =>{
     console.log(res);
     console.log(res.data);
    }).then(()=>{
     axios.get(`https://petstore.swagger.io/v2/pet/${id}`)
     .then(res=>{
      console.log(res);
     })
    }).catch((e)=>{
     console.log('error', e)
    })
   }
 const handleChange = event => {
  const {name, value} = event.target;
  setCredentials({ ...credentials, [name]: value});
 } 
const {name,id,userId,password}= credentials;
 return (
   <div className="Homepage">
     <h1 className="title">Pet Credentials</h1>
     <span>**Sign up with userId as test and password as abc123 if you dont want to create an account**</span>
    <form className='Homepage-form' onSubmit={handleSubmit} >
     <FormInput 
      name='name'
      type='text'
      value={name}
      onChange={handleChange}
      placeholder='Enter the pet name'
     required
     />
     <FormInput
      name='id'
      type='number'
      value={id}
      onChange={handleChange}
      placeholder='Enter the pet id'
     required
     />
     <FormInput
      name='userId'
      type='text'
      value={userId}
      onChange={handleChange}
      placeholder='Enter your userId'
     required
     />
     <FormInput
      name='password'
      type='password'
      value={password}
      onChange={handleChange}
      placeholder=' enter password'
     required
     />

    <button className="button">Submit</button>
    </form>
  </div>
 )
}

export default HomePage;
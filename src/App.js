import React from 'react'
// import Mailer from './component/mailer'
 import emailjs, { send } from 'emailjs-com'
 import './App.css'
 const App = () => {
     function sendEmail(e){
       e.preventDefault();

       emailjs.sendForm('service_voy91az','template_2rcs82b',e.target,
       'WOb5NCQKJ2qF_CP6w').then(res=>{
         console.log(res);
       }).catch(err=>console.log(err));
     }

   return (
     
    <div className='container border' >
     
    <h1>Contact From</h1>
    <form className='row' style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail} >
        <label>name</label>
        <input type="text" name="name"  className='form-control' />
        <label>Email</label>
        <input type="email" name="user_email" className='form-control' />
        <label>Massage</label>
        <textarea name="massage" row='4'  className='form-control'/>
        <input type='submit' value='send'className='btn btn-primary' style={{
          marginTop:'30px'
        }}/>
    </form>
  </div>
  
       
  
   )
 }
 
 export default App
 


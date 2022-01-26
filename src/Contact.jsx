import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setFormData((oldData) => {
        if (name === 'name') {
        return {
          name: value,
          phone: oldData.phone,
          email: oldData.email,
          message: oldData.message
        }
      }else if(name==='number'){
        return {
          name: oldData.name,
          phone: value,
          email: oldData.email,
          message: oldData.message,
        }
      }else if(name==='email'){
        return {
          name: oldData.name,
          phone: oldData.phone,
          email: value,
          message: oldData.message,
        }
      }else if(name==='message'){
        return {
          name: oldData.name,
          phone: oldData.phone,
          email: oldData.email,
          message: value,
        }
      }
  })
  console.log(name);

}
const formSubmit = (e) => {
  e.preventDefault()
  alert(
    `Helle my name is ${formData.name} and my phone number is ${formData.phone} and my email is ${formData.email} and this is my text ${formData.message}`
  )
  setFormData({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
}
return (
  <section id='main'>
    <div className="my-5">
      <h1 className='text-center'>Contact US</h1>
    </div>
    <div className="container contact_div">
      <div className="col-md-6 col-10 mx-auto">
        <form action="" onSubmit={formSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name='name'
              value={formData.name}
              onChange={inputEvent}
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Phone</label>
            <input type="tel"
              className="form-control"
              id="exampleFormControlInput1"
              name='number'
              value={formData.number}
              onChange={inputEvent}
              placeholder="Enter your number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name='email'
              value={formData.email}
              onChange={inputEvent}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name='message'
              value={formData.message}
              onChange={inputEvent}
              placeholder="Enter text"
            />

          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </section>
);
};

export default Contact;

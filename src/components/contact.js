import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
      setNameError('');
    } else if (name === 'email') {
      setEmail(value);
      setEmailError('');
    } else if (name === 'message') {
      setMessage(value);
      setMessageError('');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (name.trim() === '') {
      setNameError('Name is required');
      return;
    }
  
    if (!validateEmail(email)) {
      setEmailError('Email is invalid');
      return;
    }
  
    if (message.trim() === '') {
      setMessageError('Message is required');
      return;
    }
  
    try {
      const response = await fetch("https://getform.io/f/acfa290f-3294-4a32-871d-9034bd573244", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
  
      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setNameError('');
        setEmailError('');
        setMessageError('');
        setErrorMessage('');
        setSubmissionStatus('success');
        // Email sent successfully, you can add any further logic here
      } else {
        throw new Error('Error sending the form');
      }
    } catch (error) {
      setErrorMessage('An error occurred while sending the form');
      console.error(error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className='container'>
      <div className="card card-contact">
        <div className="card-body">
          <h5 className="card-title">Contact Form</h5>
          {submissionStatus === 'success' && (
            <p className="success-message">
              Thank you for reaching out! Mickey will reply within 3-5 business days.
            </p>
          )}
          {submissionStatus === 'error' && (
            <p className="error-message">
              We're sorry, an error has occurred. Please contact Mickey at Mickey.Camarco@gmail.com.
            </p>
          )}
          {!submissionStatus && errorMessage && (
            <p className="error-message">
              {errorMessage}
            </p>
          )}
          {!submissionStatus && !errorMessage && (
            <form className="form">
              <div className="mb-3">
                <input
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
                {nameError && <p className="error-text">{nameError}</p>}
              </div>
  
              <div className="mb-3">
                <input
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
                {emailError && <p className="error-text">{emailError}</p>}
              </div>
  
              <div className="mb-3">
                <textarea
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  className="form-control"
                  id="message"
                  placeholder="Message"
                ></textarea>
                {messageError && <p className="error-text">{messageError}</p>}
              </div>
              <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  ); 
}

export default Form;

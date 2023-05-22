import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../index.css'; // Import the CSS file for styling

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbqqbje"); // form ID from formspree.io // 
  if (state.succeeded) {
    return <p className="success-message">Thanks for joining!</p>;
  }
  return ( // Updated with className for styling //
  <form onSubmit={handleSubmit} className="contact-form">
  <p className="form-description">
    Hey there, I am using Formspree API to receive your feedback. 
    <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="formspree-link">
      <i className="fas fa-external-link-alt"></i> Check it out
    </a>
  </p>
  <label htmlFor="email" className="form-label">
    Email Address
  </label>
  <input
    id="email"
    type="email" 
    name="email"
    className="form-input"
  />
  <ValidationError 
    prefix="Email" 
    field="email"
    errors={state.errors}
    className="error-message"
  />
  <textarea
    id="message"
    name="message"
    className="form-textarea"
  />
  <ValidationError 
    prefix="Message" 
    field="message"
    errors={state.errors}
    className="error-message"
  />
  <button type="submit" disabled={state.submitting} className="form-button">
    Submit
  </button>
</form>


  );
}

function App() {
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;

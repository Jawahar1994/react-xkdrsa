import React, { useState, useCallback } from 'react';
import './AddListContent.css';

export default function AddListContent({ addContentHandler }) {
  const [form_data, setFormData] = useState({
    name: '',
    email: '',
  });

  const inputChangeHandler = (e) => {
    setFormData({ ...form_data, [e.target.name]: e.target.value });
  };

  const formSubmit = () => {
    if (form_data.name == '' && form_data.email == '') {
      alert('Please fill all the details');
      return false;
    }

    setFormData({ name: '', email: '' });
    addContentHandler(form_data);
  };

  return (
    <>
      <h3>Add List Content</h3>
      <hr />
      <div className="add-content-container">
        <div className="form-group">
          <label htmlFor="input-name">Name</label>
          <input
            type="text"
            name="name"
            value={form_data.name}
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-name">Email</label>
          <input
            type="text"
            name="email"
            value={form_data.email}
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div className="form-group btn">
          <button type="button" onClick={() => formSubmit()}>
            Add Content
          </button>
        </div>
      </div>
    </>
  );
}

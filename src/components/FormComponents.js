import React from 'react';

function FormComponents() {
  return (
    <div className='container'>
      <h2>Get in touch!</h2>
      <form className='formContainer'>
        <span className='labelInputContainer'>
          <label htmlFor='name'>Name</label>
          <input className='inputStyle' type='text' name='name' id='name' />
        </span>
        <span className='labelInputContainer'>
          <label htmlFor='orgName'>Organisation Name</label>
          <input
            className='inputStyle'
            type='text'
            name='orgName'
            id='orgName'
          />
        </span>
        <span className='labelInputContainer'>
          <label htmlFor='phNo'>Phone Number</label>
          <input className='inputStyle' type='text' name='phNo' id='phNo' />
        </span>
        <span className='labelInputContainer'>
          <label htmlFor='email'>E-Mail ID</label>
          <input className='inputStyle' type='email' name='email' id='email' />
        </span>
        <span className='labelInputContainer'>
          <label htmlFor='addressLane1'>Address - Lane 1</label>
          <input
            className='inputStyle'
            type='text'
            name='addressLane1'
            id='addressLane1'
          />
        </span>
        <span className='labelInputContainer'>
          <label htmlFor='addressLane2'>Address - Lane 2</label>
          <input
            className='inputStyle'
            type='text'
            name='addressLane2'
            id='addressLane2'
          />
        </span>
        <span className='labelInputContainer'>
          <label htmlFor='addressCity'>Address - City</label>
          <input
            className='inputStyle'
            type='text'
            name='addressCity'
            id='addressCity'
          />
        </span>
        <span className='labelInputContainer'>
          <label htmlFor='addressState'>Address - State</label>
          <input
            className='inputStyle'
            type='text'
            name='addressState'
            id='addressState'
          />
        </span>
        <span className='labelInputContainer'>
          <label htmlFor='addressCountry'>Address - Country</label>
          <input
            className='inputStyle'
            type='text'
            name='addressCountry'
            id='addressCountry'
          />
        </span>
      </form>
    </div>
  );
}

export default FormComponents;

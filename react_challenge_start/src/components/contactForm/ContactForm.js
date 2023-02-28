import React from "react";

export const ContactForm = ({
  guest,
  setGuest,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        value={guest}
        onChange={({target}) => {setGuest(target.value)}}
        required
        />
        <input 
        type='tel'
        value={phoneNumber}
        onChange={({target}) => {setPhoneNumber(target.value)}}
        required
        />
        <input 
        type='email'
        value={email}
        onChange={({target}) => {setEmail(target.value)}}
        required
        />
        <input 
        type='submit' 
        />
    </form>
  );
};

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
        pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"
        onChange={({target}) => {setEmail(target.value)}}
        required
        />
        <input 
        type='submit' 
        />
    </form>
  );
};

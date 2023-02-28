import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;
  return (
    <select onChange={onChange}>
      <option value=''>Select a contact</option>
      {contacts.map( contact => <option value={contact.guest}>{contact.guest}</option>)}
    </select>
  );
};

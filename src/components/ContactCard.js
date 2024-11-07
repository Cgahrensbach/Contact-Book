import React from 'react';

function ContactCard({ contact, deleteContact }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{contact.firstName} {contact.lastName}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Company: {contact.company}</p>
      <p>Position: {contact.position}</p>
      <button onClick={() => deleteContact(contact.id)}>Remove Contact</button>
    </div>
  );
}

export default ContactCard;

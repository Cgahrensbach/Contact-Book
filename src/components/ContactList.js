import React from 'react';

function ContactList({ contacts, deleteContact, openDetailsModal }) {
  const sortedContacts = [...contacts].sort((a, b) => a.firstName.localeCompare(b.firstName));
  const groupedContacts = sortedContacts.reduce((acc, contact) => {
    const firstLetter = contact.firstName.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});

  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <div className="letter-indicators">
        {Object.keys(groupedContacts).map((letter) => (
          <div key={letter} className="letter-section">
            <h3>{letter}</h3>
            <ul>
              {groupedContacts[letter].map((contact) => (
                <li key={contact.id}>
                  {/* Styled contact button */}
                  <button onClick={() => openDetailsModal(contact)} className="contact-button">
                    {contact.firstName} {contact.lastName}
                  </button>
                  <button onClick={() => deleteContact(contact.id)} className="delete-button">Delete</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;

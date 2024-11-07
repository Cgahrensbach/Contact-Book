import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
    closeModal();
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDetailsModal = (contact) => {
    setSelectedContact(contact);
    setIsDetailsModalOpen(true);
  };
  const closeDetailsModal = () => {
    setSelectedContact(null);
    setIsDetailsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
      closeDetailsModal();
    }
  };

  return (
    <div className="App">
      <h1>Contact Book</h1>
      <button onClick={openModal}>Add Contact</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <ContactForm addContact={addContact} />
          </div>
        </div>
      )}

      {isDetailsModalOpen && selectedContact && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-button" onClick={closeDetailsModal}>X</button>
            <h2>Contact Details</h2>
            <p><strong>First Name:</strong> {selectedContact.firstName}</p>
            <p><strong>Last Name:</strong> {selectedContact.lastName}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
            <p><strong>Phone:</strong> {selectedContact.phone}</p>
            <p><strong>Company:</strong> {selectedContact.company}</p>
            <p><strong>Position:</strong> {selectedContact.position}</p>
          </div>
        </div>
      )}

      <ContactList contacts={contacts} deleteContact={deleteContact} openDetailsModal={openDetailsModal} />
    </div>
  );
}

export default App;

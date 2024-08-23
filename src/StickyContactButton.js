import React, { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import './StickyContactButton.css';

const StickyContactButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <a href="#" className="sticky-contact-button" onClick={handleOpenModal}>
        Contact Us
      </a>
      <ContactFormModal showModal={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default StickyContactButton;

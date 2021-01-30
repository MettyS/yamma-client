import React from 'react';
import './Modal.css';

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className='overlay' onClick={onClose}></div>
      <div className='modal'>{children}</div>
    </>
  );
}

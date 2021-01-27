import React from 'react';
import './Modal.css';

export default function Modal({open, children, onClose}) {
  if(!open) return null;
  return (
    <>
    <a href='\#' className='overlay' onClick={onClose}>
    </a>
      <div className='modal'>
        {/* <button onClick={onClose}>
          Close
        </button> */}
        {children}
      </div>
    </>
  )
}

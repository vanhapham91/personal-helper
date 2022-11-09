import React from 'react';
import '../../styles/modal.css';

type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  ModalHeader: React.ComponentType,
  ModalContent: React.ComponentType,
}

const Modal = (props: ModalProps) => {
  const {
    isOpen,
    onClose,
    ModalHeader,
    ModalContent
  } = props;

  return (
    <>
      { isOpen ? (
        <div className="modal--wrapper">
          <div className="modal--overlay" onClick={onClose}></div>
          <div className="timesheet-form">
            <button type="button" className="button button-transparent button--absolute button--circle button-close" onClick={onClose}>
              <span className="icon-close"></span>
            </button>
            <div className="modal--section modal--header heading">
              <ModalHeader/>
            </div>
            <div className="modal--section modal--body">
              <ModalContent/>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Modal;

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
            <div className="modal--section modal--header heading">
              <ModalHeader/>
              <button type="button" className="button transparent button--circle">
                <span className="icon-close" onClick={onClose}></span>
              </button>
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

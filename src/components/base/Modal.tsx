import '../../styles/modal.css';

type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  header: JSX.Element,
  body: JSX.Element,
}

const Modal = (props: ModalProps) => {
  const {
    isOpen,
    onClose,
    header,
    body,
  } = props;

  return (
    <>
      { isOpen ? (
        <div className="modal--wrapper">
          <div className="modal--overlay" onClick={onClose}></div>
          <div className="timesheet-form">
            <div className="modal--section modal--header heading">
              { header }
              <button type="button" className="button transparent button--circle">
                <span className="icon-close" onClick={onClose}></span>
              </button>
            </div>
            <div className="modal--section modal--body">
              { body }
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

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div  className="modal-div" onClick={() => setIsOpen(false)}>
        <div style={modalStyle}>
          <h3>Test Modal</h3>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <p>This is a modal</p>
        </div>
      </div>
    </>
  );
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#fff',
  width: 400,
  borderRadius: '24px',
  boxShadow: 24,
  padding: '10px',
  textAlign: 'center',
};

export default Modal;
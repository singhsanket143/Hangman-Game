import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



const PopUpModal = ({ isOpen, afterOpenModal, closeModal, children, contentLabel }) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
};
Modal.setAppElement(document.getElementById('root'));
export default PopUpModal;

import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    textAlign: 'center',
  },
};

const Modal = ({
  isOpen = false,
  afterOpenModal = () => {},
  onRequestClose = () => {},
  title = 'missing title',
  children,
}) => (
  <ReactModal
    isOpen={isOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={onRequestClose}
    style={styles}
    contentLabel={title}
  >
    {children}
  </ReactModal>
);

export default Modal;

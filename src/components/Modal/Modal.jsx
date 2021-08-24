// import React, { useState } from 'react';
// import styles from './Modal.module.scss';

// export default function Modal(props) {
//   if (!props.showModal) {
//     return null;
// }
// const [showModal, setShowModal] = useState(false);

// const handleModalClose = e => {
//   const currentClass = e.target.className;

//   if (currentClass === 'modal-card') {
//     return;
//   }

//   setShowModal(false);
// };

// const handleModalOpen = () => {
//   setShowModal(true);
// };

//   return (
//     <div className={styles.modal}>
//       <div className={styles.content}>
//         <div className="modal-card"></div>
//       </div>
//       <div>content</div>
//       <button className="button">close Modal</button>
//     </div>
//   );
// }

// import { useState, useImperativeHandle, forwardRef } from 'react';
// import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
// // import { useSelector } from 'react-redux';
// // import selectors from '../../redux/transactions/transSelectors';
// import { useDispatch } from 'react-redux';
// import { setModalClose } from '../../redux/transactions/transOperations';

// const modalElement = document.getElementById('modal-root');

// export function Modal({ children, defaultOpen = false }, ref) {
//   const [showModal, setShowModal] = useState(false);
//   // const isModalOpenSelector = useSelector(selectors.isModalOpen);
//   const dispatch = useDispatch();

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   // const closeModal =

//   useImperativeHandle(
//     ref,
//     () => ({
//       open: () => setShowModal(true),
//       close: () => {
//         setShowModal(false);
//         dispatch(setModalClose());
//       },
//     }),
//     [close],
//   );

//   return createPortal(
//     showModal ? (
//       <div>
//         <button onClick={toggleModal}>X</button>
//         <div>{children}</div>
//       </div>
//     ) : null,
//     modalElement,
//   );
// }

// Modal.propTypes = {
//   children: PropTypes.any,
// };

// export default forwardRef(Modal);

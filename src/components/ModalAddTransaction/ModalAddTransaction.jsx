// import { useSelector } from 'react-redux';
// import selectors from '../../redux/transactions/transSelectors';
// import Modal from '../Modal';
// import { useRef } from 'react';

export default function ModallAddTransaction() {
  // const isModalOpenSelector = useSelector(selectors.isModalOpen);
  // console.log(isModalOpenSelector);

  // const modal = useRef(null);

  // if (isModalOpenSelector) {
  //   modal.current.open();
  // }

  return (
    <div>
      {/* {isModalOpenSelector ? () => modal.current.open() : null} */}
      {/* <Modal ref={modal}> */}
      <h1>Modal</h1>
      <p>Добавить транзакцию</p>
      <form>
        <label>
          <input type="checkbox" name="checkbox"></input>
        </label>
        <label>
          <input type="number" name="sum" placeholder="0.00"></input>
        </label>
        <label>
          <input type="date" name="date"></input>
        </label>
        <textarea name="comment" maxLength="300"></textarea>
      </form>
      {/* </Modal> */}
    </div>
  );
}

// {
//   <button onClick={() => modal.current.open()
//   }> +</button >
// }

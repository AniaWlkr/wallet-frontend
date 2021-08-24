import { useDispatch } from 'react-redux';
import { setModalOpen } from '../../redux/transactions/transOperations';

export default function ButtonAddTransactions() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setModalOpen());
  };

  return (
    <div>
      <button onClick={openModal}>+</button>
    </div>
  );
}

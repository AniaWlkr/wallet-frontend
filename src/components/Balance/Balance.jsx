import { useSelector } from 'react-redux';
import transSelectors from '../../redux/transactions/transSelectors.js';
import style from './Balance.module.scss';

export default function Balance() {
  const total = useSelector(transSelectors.getBalance);

  return (
    <div className={style.balance}>
      <p className={style.balanceTitle}>Ваш баланс</p>
      <p className={style.balanceValue}>
        <span className={style.symbol}>₴</span>
        {/* 24 000.00 */}
        {total}
      </p>
    </div>
  );
}

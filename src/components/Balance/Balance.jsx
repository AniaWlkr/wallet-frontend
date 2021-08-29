import { useSelector } from 'react-redux';
import financeSelectors from '../../redux/finance/financeSelectors';
import { normalizedSum } from '../../utils/normalizedSum';
import style from './Balance.module.scss';

export default function Balance() {
  const total = useSelector(financeSelectors.getCurrentUserBalance);
  const currentBalance = normalizedSum(total);

  return (
    <div className={style.balance}>
      <p className={style.balanceTitle}>Ваш баланс</p>
      <p className={style.balanceValue}>
        <span className={style.symbol}>₴</span>
        {currentBalance}
      </p>
    </div>
  );
}

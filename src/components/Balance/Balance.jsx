import style from './Balance.module.scss';

export default function Balance() {
  return (
    <div className={style.balance}>
      <p className={style.balanceTitle}>Ваш баланс</p>
      <p className={style.balanceValue}>
        <span className={style.symbol}>₴</span>
        24 000.00
      </p>
    </div>
  );
}

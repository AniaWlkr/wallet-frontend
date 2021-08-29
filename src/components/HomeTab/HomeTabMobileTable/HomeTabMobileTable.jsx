import './HomeTabMobileTable.scss';
import PropTypes from 'prop-types';
import HomeTabMobileTableItem from './HomeTabMobileTableItem';

export default function HomeTabMobileTable({ transactions, btnHandleClick }) {
  const handleClick = (operation, idTransaction) =>
    btnHandleClick(operation, idTransaction);
  return (
    <>
      {transactions.length === 0 && (
        <h2 className="mobile_title">У Вас нет транзакций за текущий период</h2>
      )}

      {transactions.length !== 0 && (
        <ul className={'mobile-table-list'}>
          {transactions.map(transaction => (
            <li key={transaction.id} className={'mobile-table-list_item'}>
              <HomeTabMobileTableItem
                transaction={transaction}
                btnHandleClick={handleClick}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
HomeTabMobileTable.propTypes = {
  transactions: PropTypes.array,
  btnHandleClick: PropTypes.func,
};

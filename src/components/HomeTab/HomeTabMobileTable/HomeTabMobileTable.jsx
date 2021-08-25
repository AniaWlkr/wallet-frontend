import './HomeTabMobileTable.scss';
import PropTypes from 'prop-types';
import HomeTabMobileTableItem from './HomeTabMobileTableItem';

export default function HomeTabMobileTable({ transactions }) {
  return (
    <ul className={'mobile-table-list'}>
      {transactions.map(transaction => (
        <li key={transaction.id} className={'mobile-table-list_item'}>
          <HomeTabMobileTableItem transaction={transaction} />
        </li>
      ))}
    </ul>
  );
}
HomeTabMobileTable.propTypes = {
  transactions: PropTypes.array,
};

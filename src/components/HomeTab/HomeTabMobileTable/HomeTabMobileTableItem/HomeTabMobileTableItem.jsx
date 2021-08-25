import './HomeTabMobileTableItem.scss';
import PropTypes from 'prop-types';

export default function HomeTabMobileTableItem({
  transaction: { date, transType, category, commentary, sum, balance },
}) {
  return (
    <ul
      className={
        transType === 'income'
          ? 'mobile-list mobile-list--income'
          : 'mobile-list'
      }
    >
      <li className="mobile-list_item">
        <span className="mobile-list_category">Дата</span>
        <span className="mobile-list_data">{date}</span>
      </li>
      <li className="mobile-list_item">
        <span className="mobile-list_category">Тип</span>
        <span className="mobile-list_data">
          {transType === 'income' ? '+' : '-'}
        </span>
      </li>
      <li className="mobile-list_item">
        <span className="mobile-list_category">Категория</span>
        <span className="mobile-list_data">{category}</span>
      </li>
      <li className="mobile-list_item">
        <span className="mobile-list_category">Комментарий</span>
        <span className="mobile-list_data">{commentary}</span>
      </li>
      <li className="mobile-list_item">
        <span className="mobile-list_category">Сумма</span>
        <span
          className={
            transType === 'income'
              ? 'mobile-list_data mobile-list_data--income'
              : 'mobile-list_data mobile-list_data--spend'
          }
        >
          {sum}
        </span>
      </li>
      <li className="mobile-list_item">
        <span className="mobile-list_category">Баланс</span>
        <span className="mobile-list_data">{balance}</span>
      </li>
    </ul>
  );
}

HomeTabMobileTableItem.propTypes = {
  transaction: PropTypes.object,
};

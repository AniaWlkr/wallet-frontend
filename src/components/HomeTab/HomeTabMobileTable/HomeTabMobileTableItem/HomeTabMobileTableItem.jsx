import './HomeTabMobileTableItem.scss';
import PropTypes from 'prop-types';

export default function HomeTabMobileTableItem({
  transaction: { id, date, transType, category, commentary, sum, balance },
  btnHandleClick,
}) {
  const handleClick = event =>
    btnHandleClick(event.target.value, event.target.id);

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
      <li className="mobile-list_item">
        <button
          type="button"
          className="mobile-list_btn mobile-list_btn--update"
          value="upgrade"
          id={id}
          onClick={handleClick}
        />
        <button
          type="button"
          className="mobile-list_btn mobile-list_btn--delete"
          value="delete"
          id={id}
          onClick={handleClick}
        />
      </li>
    </ul>
  );
}

HomeTabMobileTableItem.propTypes = {
  transaction: PropTypes.object,
  btnHandleClick: PropTypes.func,
};

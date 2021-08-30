import './HomeTabTable.scss';
import PropTypes from 'prop-types';

const tableHeadData = [
  'Дата',
  'Тип',
  'Категория',
  'Комментарий',
  'Сумма',
  'Баланс',
];

export default function HomeTabTable({ transactions, btnHandleClick }) {
  const handleClick = event =>
    btnHandleClick(event.target.value, event.target.id);
  return (
    <>
      {transactions.length === 0 && (
        <h2 className="title">У Вас нет транзакций за текущий период</h2>
      )}
      {transactions.length !== 0 && (
        <table className={'table'}>
          <thead className={'table-head'}>
            <tr className={'table-head_row'}>
              {tableHeadData.map(head => (
                <th className={'table-head_data'} key={head}>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={'table-body'}>
            {transactions.map(
              ({ id, date, transType, category, commentary, sum, balance }) => (
                <tr key={id} className={'table-body_row'}>
                  <td className={'table-body_data'}>{date}</td>
                  <td className={'table-body_data'}>
                    {transType === 'income' ? '+' : '-'}
                  </td>
                  <td className={'table-body_data'}>{category}</td>
                  <td className={'table-body_data'}>{commentary}</td>
                  <td
                    className={
                      transType === 'income'
                        ? 'table-body_data table-body_data--income'
                        : 'table-body_data table-body_data--spend'
                    }
                  >
                    {sum}
                  </td>
                  <td className={'table-body_data'}>{balance}</td>
                  <td className={'table-body_data'}>
                    <button
                      type="button"
                      className="table-body_btn table-body_btn--update"
                      value="upgrade"
                      id={id}
                      onClick={handleClick}
                    />
                    <button
                      type="button"
                      className="table-body_btn table-body_btn--delete"
                      value="delete"
                      id={id}
                      onClick={handleClick}
                    />
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      )}
    </>
  );
}
HomeTabTable.propTypes = {
  transactions: PropTypes.array,
  btnHandleClick: PropTypes.func,
};

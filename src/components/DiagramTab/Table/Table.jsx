import './Table.scss';
import PropTypes from 'prop-types';
import TableItem from './TableItem';
import Selector from '../Selector';
import {
  YEAR_INITIAL_STATE,
  MONTH_INITIAL_STATE,
} from '../../../utils/helpers';

export default function Table({
  financeData,
  totalFinanceData,
  monthOptions,
  yearOptions,
  onSelectMonth,
  onSelectYear,
}) {
  /* methods to selectors */
  // const changeMonth = month => console.log(month);
  // const changeYear = year => console.log(year);

  return (
    <div className="tableWrapper">
      <div className="tableSelectors">
        <div className="firstSelectorWrapper">
          <Selector
            options={monthOptions}
            // initialState={'Месяц'}
            initialState={MONTH_INITIAL_STATE}
            changeSelector={onSelectMonth}
          />
        </div>
        <Selector
          options={yearOptions}
          // initialState={'Год'}
          initialState={YEAR_INITIAL_STATE}
          className="firstSelector"
          changeSelector={onSelectYear}
        />
      </div>
      {financeData.length > 0 ? (
        <div className="tableHead">
          <span className="tableHead_item">Категория</span>
          <span className="tableHead_item">Сумма</span>
        </div>
      ) : null}
      <ul className="categoryList">
        {financeData.map(item => (
          <TableItem
            key={item.categoryName}
            class={'categoryList_item'}
            item={item}
            box={true}
          />
        ))}
      </ul>
      <ul className="totalList">
        {totalFinanceData.map(item => (
          <TableItem
            key={item.categoryName}
            class={'totalList_item'}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
}
Table.propTypes = {
  financeData: PropTypes.array,
  totalFinanceData: PropTypes.array,
  monthOptions: PropTypes.array,
  yearOptions: PropTypes.array,
  yearState: PropTypes.string,
  monthState: PropTypes.string,
  onSelectMonth: PropTypes.func,
  onSelectYear: PropTypes.func,
};

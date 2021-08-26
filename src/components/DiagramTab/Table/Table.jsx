import './Table.scss';
import PropTypes from 'prop-types';

import TableItem from './TableItem';
import Selector from '../Selector';

export default function Table({
  financeData,
  totalFinanceData,
  monthOptions,
  yearOptions,
  yearState,
  monthState,
}) {
  return (
    <div className="tableWrapper">
      <div className="tableSelectors">
        <div className="firstSelectorWrapper">
          <Selector
            options={yearOptions}
            initialState={yearState}
            className="firstSelector"
          />
        </div>
        <Selector options={monthOptions} initialState={monthState} />
      </div>
      <div className="tableHead">
        <span className="tableHead_item">Категория</span>
        <span className="tableHead_item">Сумма</span>
      </div>
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
};

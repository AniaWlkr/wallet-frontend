import Chart from './Chart';
import Table from './Table';
import transSelectors from '../../redux/transactions/transSelectors';
import { getTransactionsOperation } from '../../redux/transactions/transOperations';
import financeSelectors from '../../redux/finance/financeSelectors';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { normalizedSum } from '../../utils/normalizedSum';
import style from './DiagramTab.module.scss';
// import { totalFinanceData } from './data/financeData';
import { monthOptions, yearOptions } from '../../utils/helpers';

export default function DiagramTab() {
  const dispatch = useDispatch();
  const [currentIncome, setCurrentIncome] = useState(0);
  const [currentSpend, setCurrentSpend] = useState(0);
  const currentMonth = new Date().getMonth() + 1;
  const [selectMonth, setSelectMonth] = useState(currentMonth);
  const currentYear = new Date().getFullYear();
  const [selectYear, setSelectYear] = useState(currentYear);

  useEffect(() => {
    dispatch(getTransactionsOperation(selectMonth, selectYear));
  }, [dispatch, selectMonth, selectYear]);

  useEffect(() => {
    currentSum(getAllTransByMonth);
  }, [selectMonth, selectYear]);

  const onSelectMonth = itemTitle => {
    const mnthObj = monthOptions.find(item => item.label === itemTitle);
    const month = Number(mnthObj.value);
    setSelectMonth(month);
  };

  const onSelectYear = itemTitle => {
    const year = Number(itemTitle);
    setSelectYear(year);
  };

  const getAllTransByMonth = useSelector(
    transSelectors.getTransactionsPerMonth(selectMonth, selectYear),
  );

  const currentSum = getAllTransByMonth => {
    let currentIncome = 0;
    let currentSpend = 0;
    if (getAllTransByMonth) {
      // eslint-disable-next-line array-callback-return
      getAllTransByMonth.map(({ transType, sum }) => {
        switch (transType) {
          case 'income':
            currentIncome = currentIncome + sum;
            break;
          case 'spend':
            currentSpend = currentSpend + sum;
            break;
          default:
            console.warn('This type of transaction is not found');
        }
        // return console.log('success');
      });
      setCurrentIncome(currentIncome);
      setCurrentSpend(currentSpend);
    }
  };

  const getTransByCateg = useSelector(
    transSelectors.getSpendPerCategory(selectMonth, selectYear),
  );

  const totalBalance = useSelector(financeSelectors.getCurrentUserBalance);
  const currentBalanse = normalizedSum(totalBalance);

  const financeData = getTransByCateg.map(({ category, sum, color }) => {
    const nrmlSum = normalizedSum(sum);
    return { categoryName: category, total: nrmlSum, color };
  });

  const dataCategory = financeData.map(({ categoryName }) => categoryName);
  const dataSum = getTransByCateg.map(({ sum }) => sum);
  const dataBgColor = financeData.map(({ color }) => color);

  const data = {
    labels: dataCategory,
    datasets: [
      {
        lable: 'Category',
        data: dataSum,
        backgroundColor: dataBgColor,
        borderWidth: 1,
        hoverOffset: 2,
      },
    ],
  };

  const totalFinanceData = [
    {
      categoryName: 'Расходы:',
      total: normalizedSum(currentSpend),
      color: '#FF6596',
    },
    {
      categoryName: 'Доходы:',
      total: normalizedSum(currentIncome),
      color: '#24CCA7',
    },
  ];

  return (
    <div className={style.wrapper}>
      <h2 className={style.tabTitle}>Статистика</h2>
      <div className={style.diagramWrapper}>
        {financeData.length > 0 ? (
          <Chart data={data} totalBalance={currentBalanse} />
        ) : (
          <h3 className={style.noTrans}>У Вас нет транзакций в этом месяце</h3>
        )}
        <Table
          financeData={financeData}
          totalFinanceData={totalFinanceData}
          monthOptions={monthOptions}
          yearOptions={yearOptions}
          onSelectMonth={onSelectMonth}
          onSelectYear={onSelectYear}
        />
      </div>
    </div>
  );
}

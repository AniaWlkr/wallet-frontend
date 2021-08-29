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
import { monthOptions, yearOptions } from './data/selectorsData';


export default function DiagramTab() {
  const dispatch = useDispatch();
  const currentMonth = new Date().getMonth() + 1;
  const [seletcMonth, setSeletcMonth] = useState(currentMonth);
  const currentYear = new Date().getFullYear();
  const [seletcYear, setSeletcYear] = useState(currentYear);

  useEffect(() => {
    dispatch(getTransactionsOperation(seletcMonth, seletcYear));
  }, [dispatch, seletcMonth, seletcYear]);

  const onSelectMonth = itemTitle => {
    const mnthObj = monthOptions.find(item => item.label === itemTitle);
    const month = Number(mnthObj.value);
    setSeletcMonth(month);
  };

  const onSelectYear = itemTitle => {
    const year = Number(itemTitle);
    setSeletcYear(year);
  };

  const getTransByCateg = useSelector(
    transSelectors.getSpendPerCategory(seletcMonth, seletcYear),
  );

  const totalBalance = useSelector(financeSelectors.getCurrentUserBalance);
  const currentBalanse = normalizedSum(totalBalance);
  const totalSpend = useSelector(
    transSelectors.getSpend(seletcMonth, seletcYear),
  );
  const totalIncome = useSelector(
    transSelectors.getIncome(seletcMonth, seletcYear),
  );

  const bgColor = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
    '#F5C3A3',
    '#B483B6',
    '#C68BFD',
    '#1D1BC8',
    '#3CBA2C',
    '#9589C0',
    '#6B6BDB',
    '#F241E7',
    '#8E0190',
    '#A255DC',
    '#509EA6',
    '#BCE3B1',
  ]; // переделать, Катя

  const financeData = getTransByCateg.map(({ category, sum }) => {
    const color = bgColor[Math.floor(Math.random() * bgColor.length)];
    // const color =
    //   '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    const nrmlSum = normalizedSum(sum);
    return { categoryName: category, total: nrmlSum, color };
  });

  const nofinanceData = [
    {
      categoryName: 'No transactions',
      total: '0.00',
      color: '#FF0000',
    },
  ];

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
      total: normalizedSum(totalSpend),
      color: '#FF6596',
    },
    {
      categoryName: 'Доходы:',
      total: normalizedSum(totalIncome),
      color: '#24CCA7',
    },
  ];

  console.log('test');
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
          financeData={financeData.length > 0 ? financeData : nofinanceData}
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

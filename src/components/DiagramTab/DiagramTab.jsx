import Chart from './Chart';
import Table from './Table';
import transSelectors from '../../redux/transactions/transSelectors';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { normalizedSum } from '../../utils/normalizedSum';
import style from './DiagramTab.module.scss';

// import { totalFinanceData } from './data/financeData';
import { monthOptions, yearOptions } from './data/selectorsData';

export default function DiagramTab() {
  const getTransByCateg = useSelector(transSelectors.getSpendPerCategory);
  // const getAllTrans = useSelector(transSelectors.getAllTransactions);
  const totalBalance = useSelector(transSelectors.getBalance);
  const totalSpend = useSelector(transSelectors.getSpend);
  const totalIncome = useSelector(transSelectors.getIncome);

  // const spendTrans = getTransByCateg.filter(
  //   trans => !trans.category.includes('Основной'),
  // );

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
  ];

  const financeData = getTransByCateg.map(({ category, sum }) => {
    const color = bgColor[Math.floor(Math.random() * bgColor.length)];
    const nrmlSum = normalizedSum(sum);
    return { categoryName: category, total: nrmlSum, color };
  });

  const dataSum = getTransByCateg.map(({ sum }) => sum);
  const dataBgColor = financeData.map(({ color }) => color);

  const data = {
    datasets: [
      {
        data: dataSum,
        backgroundColor: dataBgColor,
        borderWidth: 0,
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

  return (
    <div className={style.wrapper}>
      <h2 className={style.tabTitle}>Статистика</h2>
      <div className={style.diagramWrapper}>
        <Chart data={data} totalBalance={totalBalance} />
        <Table
          financeData={financeData}
          totalFinanceData={totalFinanceData}
          monthOptions={monthOptions}
          yearOptions={yearOptions}
        />
      </div>
    </div>
  );
}

import Chart from './Chart';
import Table from './Table';

import { financeData, totalFinanceData } from './data/financeData';
import {
  monthOptions,
  yearOptions,
  YEAR_INITIAL_STATE,
  MONTH_INITIAL_STATE,
} from './data/selectorsData';

export default function DiagramTab() {
  const data = {
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 4, 2, 1],
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div>
      <h2>Статистика</h2>
      <Chart data={data} />
      <Table
        financeData={financeData}
        totalFinanceData={totalFinanceData}
        monthOptions={monthOptions}
        yearOptions={yearOptions}
        yearState={YEAR_INITIAL_STATE}
        monthState={MONTH_INITIAL_STATE}
      />
    </div>
  );
}

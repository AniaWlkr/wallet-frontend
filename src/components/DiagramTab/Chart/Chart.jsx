import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import './Chart.scss';

const options = {
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Chart = ({ data, totalBalance }) => {
  return (
    <div className="Chart">
      <Doughnut options={options} data={data} />
      <span className="currentBalance">₴ {totalBalance}</span>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object,
  totalBalance: PropTypes.string,
};

export default Chart;

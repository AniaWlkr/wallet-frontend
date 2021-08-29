import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import './Chart.scss';

const options = {
  cutout: '70%',
};

const Chart = ({ data, totalBalance }) => {
  return (
    <div className="Chart">
      <Doughnut options={options} data={data} />
      <span className="text">₴ {totalBalance}</span>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object,
  totalBalance: PropTypes.number,
};

export default Chart;

import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import './Chart.scss';

const options = {
  cutout: '70%',
};

const Chart = ({ data }) => {
  return (
    <div className="Chart">
      <Doughnut options={options} data={data} />
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object,
};

export default Chart;

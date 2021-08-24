import Chart from '../Chart';

const DiagramTab = () => {
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
    </div>
  );
};

export default DiagramTab;

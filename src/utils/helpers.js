const monthOptions = [
  { value: '1', label: 'Январь' },
  { value: '2', label: 'Февраль' },
  { value: '3', label: 'Март' },
  { value: '4', label: 'Апрель' },
  { value: '5', label: 'Май' },
  { value: '6', label: 'Июнь' },
  { value: '7', label: 'Июль' },
  { value: '8', label: 'Август' },
  { value: '9', label: 'Сентябрь' },
  { value: '10', label: 'Октябрь' },
  { value: '11', label: 'Ноябрь' },
  { value: '12', label: 'Декабрь' },
];

const yearOptions = [
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
];
// const YEAR_INITIAL_STATE = new Date().getFullYear() + '';
// const currentMonth = new Date().getMonth();
// const monthObj = monthOptions.find(el => Number(el.value) === currentMonth + 1);
// const MONTH_INITIAL_STATE = monthObj.label;

const generateLightColorHex = () => {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
};

export {
  monthOptions,
  yearOptions,
  YEAR_INITIAL_STATE,
  MONTH_INITIAL_STATE,
  generateLightColorHex,
};


import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';

const colourStyles = {
  placeholder: base => ({
    ...base,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#000000',
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: 10,
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    // backdropFilter: 'blur(5px)',
    borderRadius: '20px',
  }),
  // menuPortal: (provided, state) => ({
  //   ...provided,
  //   background: 'rgba(255, 255, 255, 0.7)',
  // }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),

  control: styles => ({
    ...styles,
    borderRadius: '30px',
    border: '1px solid #000000',
    padding: '0 15px',
    minHeight: '50px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: ' 1.5',
    color: '#000000',
    fill: '000000',
    ':hover': { cursor: 'pointer' },
    '@media screen and (min-width: 768px)': {
      minWidth: '166px',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#000000',
    padding: 20,
    ':hover': { cursor: 'pointer' },
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: ' 1.5',
  }),
};

export default function Selector({ options, initialState, changeSelector }) {
  const [valueName, setValueName] = useState(initialState);

  const handler = async event => {
    await setValueName(event.label);
    changeSelector(event.label);
  };

  return (
    <Select
      value={valueName}
      onChange={handler}
      options={options}
      placeholder={valueName}
      styles={colourStyles}
      className={'selector'}
      // theme={theme => ({
      //   ...theme,
      //   borderRadius: 0,
      //   colors: {
      //     ...theme.colors,
      //     primary25: 'hotpink',
      //     primary: 'black',
      //   },
      // })}
    />
  );
}

Selector.propTypes = {
  options: PropTypes.array,
  initialState: PropTypes.string,
  // theme: PropTypes.func,
  changeSelector: PropTypes.func,
};

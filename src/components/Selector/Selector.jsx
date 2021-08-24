import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';

const colourStyles = {
  clearIndicator: prevStyle => ({
    ...prevStyle,
    color: 'rgba(0, 0, 0, 0.4)',
    ':hover': {
      color: 'rgba(0, 0, 0, 0.4)',
    },
  }),
  control: styles => ({
    ...styles,
    borderRadius: '30px',
    border: '1px solid #000000',
    padding: '0 20px',
    minHeight: '50px',
    fontStyle: 'normal',
    fontWeight: '00',
    fontSize: '18px',
    lineHeight: ' 1.5',
    color: '#000000',
    ':hover': { cursor: 'pointer' },
    '@media screen and (min-width: 768px)': {
      minWidth: '166px',
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? 'red' : 'orange',
      color: '#FFF',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
};

export default function Selector({ options, initialState }) {
  const [valueName, setValueName] = useState(initialState);

  const handler = event => {
    setValueName(event.label);
  };

  return (
    <Select
      value={valueName}
      onChange={handler}
      options={options}
      placeholder={valueName}
      styles={colourStyles}
      className={'selector'}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'hotpink',
          primary: 'black',
        },
      })}
    />
  );
}

Selector.propTypes = {
  options: PropTypes.array,
  initialState: PropTypes.string,
  theme: PropTypes.func,
};

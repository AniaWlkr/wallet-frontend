import PropTypes from 'prop-types';
import styles from './IconButtonTemplate.module.scss';

const IconButtonTemplate = ({ children, type, handleClick, ...allyProps }) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={handleClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

IconButtonTemplate.propTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
};

IconButtonTemplate.defaultProps = {
  handleClick: () => null,
  children: [],
  type: 'button',
};

export default IconButtonTemplate;

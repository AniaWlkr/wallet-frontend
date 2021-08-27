import PropTypes from 'prop-types';
import styles from './ContainerForLoginAndRegistration.module.scss';

const ContainerForLoginAndRegistration = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

ContainerForLoginAndRegistration.propTypes = {
  children: PropTypes.node,
};

export default ContainerForLoginAndRegistration;

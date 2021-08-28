import PropTypes from 'prop-types';

export const Home = ({ svg }) => {
  return (
    <svg className={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M3.556 0c-1.964 0-3.556 1.592-3.556 3.556v24.889c0 1.964 1.592 3.556 3.556 3.556h24.889c1.964 0 3.556-1.592 3.556-3.556v-24.889c0-1.964-1.592-3.556-3.556-3.556h-24.889zM13.867 17.987v6.902h-5.333v-9.203h-3.2l10.667-10.353 10.667 10.353h-3.2v9.203h-5.333v-6.902h-4.267z"></path>
    </svg>
  );
};
Home.propTypes = {
  svg: PropTypes.string,
};

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import authOperations from '../../redux/auth/authOperations';
import Router from '../Router';
// import Navigation from '../Navigation';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* <Navigation /> */}
      <Router />
    </>
  );
}
App.propTypes = {
  onGetCurrentUser: PropTypes.func,
};

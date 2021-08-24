// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../Container';
// import { getCurrentUser } from '../../redux/auth/auth-operations';
import Router from '../Router';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <Container>
        <Router />
      </Container>
    </>
  );
}
App.propTypes = {
  onGetCurrentUser: PropTypes.func,
};

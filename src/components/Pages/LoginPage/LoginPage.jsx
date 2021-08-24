import { useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import routes from '../../../routes/routes';
import LoginForm from '../../LoginForm';
// import operations from '../../../redux/auth/authOperations';
// import selectors from '../../../redux/auth/authSelectors';
// import { useDispatch } from 'react-redux';
import Modal from '../../Modal';

export default function LoginPage() {
  // const isAuthed = useSelector(selectors.isAuthed);
  // const dispatch = useDispatch();
  // const logOut = () => dispatch(operations.logoutUser());
  const modal = useRef(null);

  return (
    <div>
      <button onClick={() => modal.current.open()}>Open modal</button>
      <Modal ref={modal}>
        <h1>Modal</h1>
      </Modal>

      {/* <div>
        <NavLink to={routes.dashBoard}>Home</NavLink>
        <NavLink to={routes.register}>Register</NavLink>
        {isAuthed ? (
          <div>
            <NavLink onClick={logOut} to={routes.homepage}>
              Exit
            </NavLink>
          </div>
        ) : (
          <h3>U r not authed</h3>
        )}
      </div> */}

      <LoginForm />
    </div>
  );
}

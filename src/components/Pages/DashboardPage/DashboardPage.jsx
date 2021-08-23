import { NavLink } from 'react-router-dom';
import routes from '../../../routes/routes';
import selectors from '../../../redux/auth/authSelectors.js';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../../redux/auth/authOperations';

export default function DashboardPage() {
  const isAuthed = useSelector(selectors.isAuthed);
  console.dir(isAuthed);

  const dispatch = useDispatch();
  const logOut = () => dispatch(operations.logoutUser());

  console.log(routes);

  return (
    <div>
      {isAuthed ? (
        <div>
          <p>
            HOMEPAGE <br />
            you isAuthed
          </p>
          <NavLink to={routes.homepage}>Home</NavLink>
          <NavLink onClick={logOut} to={routes.homepage}>
            Exit
          </NavLink>
        </div>
      ) : (
        <div>
          <p>
            HOMEPAGE
            <br /> you is Not Authed
          </p>
          <NavLink to={routes.homepage}>Home</NavLink>
          <NavLink to={routes.login}>Login</NavLink>
          <NavLink to={routes.register}>Register</NavLink>
        </div>
      )}
    </div>
  );

  // <div>
  //   <div>
  //     <p>DashboardPage</p>
  //     <NavLink to={routes.dashBoard}>Home</NavLink>
  //     <NavLink to={routes.login}>Login</NavLink>
  //     <NavLink to={routes.register}>Register</NavLink>
  //     <NavLink onClick={logOut} to={routes.dashBoard}>
  //       Exit
  //     </NavLink>
  //   </div>
  // </div>
}

// не удаляйте комментарий плз

/*  
return (
    <div>
      {isAuthed ? (
        <div>
          <p>
            HOMEPAGE <br />
            you isAuthed
          </p>
          <NavLink to={routes.homepage}>Home</NavLink>
          <NavLink to={routes.homepage}>Exit</NavLink>
        </div>
      ) : (
        <div>
          <p>
            HOMEPAGE
            <br /> you is Not Authed
          </p>
          <NavLink to={routes.homepage}>Home</NavLink>
          <NavLink to={routes.login}>Login</NavLink>
          <NavLink to={routes.register}>Register</NavLink>
        </div>
      )}
    </div>
  );

  */

// не удаляйте комментарий плз

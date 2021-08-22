import { NavLink } from 'react-router-dom';
import routes from '../../../routes/routes';
// import authSelectors from '../../../redux/auth/authSelectors';
// import { useSelector } from 'react-redux';

export default function Homepage() {
  // const isAuthed = useSelector(authSelectors.isAuthed);
  // console.dir(isAuthed);

  return (
    <div>
      <div>
        <p>HOMEPAGE</p>
        <NavLink to={routes.homepage}>Home</NavLink>
        <NavLink to={routes.login}>Login</NavLink>
        <NavLink to={routes.register}>Register</NavLink>
        <NavLink to={routes.homepage}>Exit</NavLink>
      </div>
    </div>
  );
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

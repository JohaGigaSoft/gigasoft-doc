import {
  Link,
  matchRoutes,
  useLocation,
  useResolvedPath,
} from 'react-router-dom';
import { routes } from '../router';

const NavLink = ({
  to,
  exact,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) => {
  let location = useLocation();
  let resolvedLocation = useResolvedPath(to);
  let routeMatches = matchRoutes(routes, location);

  let isActive;
  if (exact) {
    isActive = location.pathname === resolvedLocation.pathname;
  } else {
    isActive = routeMatches.some(
      (match) => match.pathname === resolvedLocation.pathname
    );
  }

  let allClassNames =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);

  return <Link className={allClassNames} to={to} {...rest} />;
};

export default NavLink;

import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/frontend-portfolio/" className="logo">
            <strong>My</strong> portfolio
          </NavLink>
          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/frontend-portfolio/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/frontend-portfolio/projects"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/frontend-portfolio/contacts"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

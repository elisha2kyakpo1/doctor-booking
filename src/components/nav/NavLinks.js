import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => (
  <nav className="nav">
    <h1 className="logo">Get a specialist</h1>
    <ul className="links">
      <Link to="/home">
        <li>Home |</li>
      </Link>

      <Link to="/registration">
        <li>Add a doctor |</li>
      </Link>
      <Link to="/login">
        <li>Login |</li>
      </Link>
      <Link className="nav-link" to="/signup">
        <li>SignUp</li>
      </Link>
    </ul>
  </nav>
);

export default NavLinks;

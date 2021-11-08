import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => (
  <nav className="nav">
    <h1>Get a specialist</h1>
    <ul className="links">
      <Link to="/home">
        <li title="home">Home |</li>
      </Link>
      <Link to="/login">
        <li title="calculator">Login |</li>
      </Link>
      <Link to="/signup">
        <li>Sign In</li>
      </Link>
    </ul>
  </nav>
);

export default NavLinks;

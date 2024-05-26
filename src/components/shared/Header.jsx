import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header({ title, navElements }) {
  return (
    <header className="student-manager-header">
      <div className="logo">
        <Link to="/">
          <FontAwesomeIcon icon={faGraduationCap} className="school-icon" />
          Student Manager
        </Link>
      </div>
      <nav>
        <ul className="navbar-elements">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students/new">New Student</Link>
          </li>
          <li>
            <Link to="/students">StudentList</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

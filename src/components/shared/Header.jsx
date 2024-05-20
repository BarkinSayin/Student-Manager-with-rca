import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Header({ title, navElements }) {
  return (
    <header className="student-manager-header">
      <div className="logo">
        <FontAwesomeIcon icon={faGraduationCap} className="school-icon" />
        {title}
      </div>
      <nav>
        <ul className="navbar-elements">
          {navElements.map((element) => (
            <li>
              <a href="*">{element}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

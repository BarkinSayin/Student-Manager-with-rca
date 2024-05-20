import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="student-manager-header">
      <div className="header-left">
        <FontAwesomeIcon icon={faGraduationCap} className="school-icon" />
        <p>Student Manager</p>
      </div>
      <div className="header-right">
        <div>
          <a href="*">Home</a>
        </div>
        <div>
          <a href="*">About</a>
        </div>
        <div>
          <a href="*">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

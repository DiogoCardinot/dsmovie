import { ReactComponent as GitHubIcon } from "assets/img/github.svg";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <Link to="/" className="dsmovie-nav-redirectTitle">
            <h1>DSMovie</h1>
          </Link>
          <a href="https://github.com/DiogoCardinot">
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/DiogoCardinot</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

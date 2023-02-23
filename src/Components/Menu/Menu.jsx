import { Link } from "react-router-dom";
import logoSura from "../../assets/logoSura.png"

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark d-flex justify-content-end ">
        <div className="container ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 collapse navbar-collapse " id="navbarSupportedContent" >
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

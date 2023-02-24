import React from "react";
import { Link } from "react-router-dom";
import logoSura from "../../assets/logoSura.png";


export const Sidebar = () => {
  return (
    <div className="col-sm-2">
      <div className="d-flex flex-column align-items-center col-auto bg-blue min-vh-100 flex-grow-1 position-sticky">
        <div className="my-3">
          <Link
            className="text-white fw-bold text-decoration-none d-flex align-items-center d-none d-md-inline "
            to="/"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-6 d-flex align-items-center justify-content-center navbar-brand">
                <img src={logoSura} alt="" className="img-fluid w-100 p-2" />
                <h1 className="fs-5 text-white">
                Application
              </h1>
              </div>
              
            </div>
          </Link>
          <hr className="text-white fw-bold" />
        </div>
        <ul
          className="nav nav-pills flex-column mt-4 mt-sm-0 text-white fw-bold"
          id="menu"
        >
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/">
              <i className="bi bi-newspaper"></i>
              <span className="ms-2 d-none d-md-inline">Noticias</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/indicadores">
              <div className="row">
                <div className="col-1">
                  <i className="bi bi-diagram-3 "></i>
                </div>
                <div className="col-2">
                  <span className=" d-none d-md-inline">Indicadores</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="#">
              <i className="bi bi-person-badge"></i>
              <span className="ms-2 d-none d-md-inline">Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

// <li className="nav-item">
//   <Link
//     className="nav-link text-white"
//     to="/indicadores"
//     data-bs-toggle="collapse"
//   >
//     <i className="bi bi-diagram-3 "></i>
//     <span className="ms-2 d-none d-sm-inline">Indicadores</span>
//     <i className="bi bi-caret-down-fill ms-2 fs-6"></i>
//   </Link>
//   <ul
//     className="nav collapse ms-1 flex-column"
//     id="/indicadoressidemenu"
//     data-bs-parent="#menu"
//   >
//     <li className="nav-item">
//       <Link className="nav-link" to="#" aria-current="page">
//         item 1
//       </Link>
//     </li>
//     <li className="nav-item">
//       <Link className="nav-link" to="#">
//         item 2
//       </Link>
//     </li>
//     <li className="nav-item">
//       <Link className="nav-link " to="#">
//         item 3
//       </Link>
//     </li>
//   </ul>
// </li>

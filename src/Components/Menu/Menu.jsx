import { Link } from "react-router-dom";
import logoSura from "../../assets/logoSura.png"


export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-blue navbar-dark">
  <div className="container-fluid">
    <Link className=" navbar-brand" to="/">
    {/* <img src={} alt="" className="img-fluid w-25 me-2" /> */}
      Application</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item hover-blue">
          <Link className="nav-link active" aria-current="page" to="/">
          <i className="bi bi-newspaper me-1"></i>
            Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/indicadores">
          <i className="bi bi-diagram-3 me-1"></i>
            Indicadores</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/celulas"><i className="bi bi-x-diamond me-1"></i>
          Celulas</Link>
        </li>
      </ul>
      <div className="d-flex d-grid gap-2 align-items-center" role="search">
        <Link className="nav-item text-white" to="">
          Sign in
        </Link>
        <Link className="nav-item btn btn-primary bg-blue border border-white" >
          Sign up
        </Link>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

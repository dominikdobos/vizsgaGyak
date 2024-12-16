import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Oldal cím</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/public" className="nav-link active">
                Public
              </Link>
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

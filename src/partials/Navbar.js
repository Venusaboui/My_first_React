import { Link, useNavigate } from "react-router-dom";
import language from "../images/language.png";
import notif from "../images/notif.png";
import profile from "../images/profile-user.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/notifications">
          <img src={notif} alt="" style={{ width: "30px" }} />
        </Link>

        <Link to="/language">
          <img src={language} alt="" style={{ width: "30px" }} />
        </Link>

        <Link data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src={profile} alt="" style={{ width: "30px" }} />
        </Link>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog d-md-flex justify-content-md-end w-100 bg-secondary">
            <div className="modal-content my-2 btn-sm w-50">
              <div className="modal-body d-flex">
                <Link
                  to="/profile"
                  className="btn btn-light btn-sm m-2"
                  onClick={() =>
                    document
                      .querySelector("#exampleModal")
                      .classList.remove("show")
                  }
                >
                  View Profile
                </Link>
                <button className="btn btn-light m-2" onClick={handleLogout}>
                  Logout
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

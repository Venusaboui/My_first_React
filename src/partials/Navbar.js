import { Link } from "react-router-dom";
import notif from '../images/notif.png'
import language from '../images/language.png'
import profile from '../images/profile.png'

const Navbar = () => {
    return (

        <nav className="navbar">

            <div className="links">
                <Link to="/notifications"><img src={notif} alt="" style={{ width: "30px", }} /></Link>

                <Link to="/language" ><img src={language} alt="" style={{ width: "30px", }} /></Link>

                <Link data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={profile} alt="" style={{ width: "30px", }} /></Link>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">


                            <div class="modal-footer">
                                <div className="modal-footer">
                                    <Link to="/profile" className="btn btn-primary" onClick={() => document.querySelector('#exampleModal').classList.remove('show')}>
                                        Go to Profile
                                    </Link>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Log out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    );
}

export default Navbar;
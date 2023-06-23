import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    const handleLogout = async () => {
        try {
          
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = "/";
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <h1>Study <span>Connect</span></h1>
            </div>
            <div className="navbar-center">
                <span><Link to="/welecome">Welcome</Link> </span>
                <span><Link to="/reservation">Reservation</Link></span>
                <span><Link to="/myreservation">My Reservation</Link></span>
            </div>
            <div className="navbar-right">
                <span onClick={handleLogout}>LogOut</span>
            </div>
        </div>
    )
}

export default Navbar;
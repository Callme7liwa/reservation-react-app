import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <h1>Study <span>Connect</span></h1>
            </div>
            <div className="navbar-center">
                <span>Welcome</span>
                <span>Reservation</span>
                <span>My Reservation</span>
            </div>
            <div className="navbar-right">
                <span>LogOut</span>
            </div>
        </div>
    )
}

export default Navbar ;
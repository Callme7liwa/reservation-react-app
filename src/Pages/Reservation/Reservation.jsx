import Navbar from "../components/Navbar/Navbar";
import "./Reservation.css";


const Reservation = () => {

    return (
        <div className="reservation-page-container">
            <Navbar />
            <div className="page-title">
                <h1>Make Your <br />Reservation <span>here !</span></h1>
            </div>
            <div className="list-reservation">
                <div className="reservation-item"></div>
                <div className="reservation-item"></div>
                <div className="reservation-item"></div>
                <div className="reservation-item"></div>
            </div>
        </div>
    )
}

export default Reservation ; 
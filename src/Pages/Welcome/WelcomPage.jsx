import Images from "../../Images";
import "./Welcome.css";

const WelcomPage = () => {
    return (
        <div className="welcome-page-container">
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

            <div className="welcome-body">
                <div className="welcome-body-left">
                    <div className="welcoming-title">
                        <h1> Welcome There  </h1>
                        <h1 className="name"> Derkaoui Hatim !</h1>
                    </div>
                    <div className="line">
                        <div className="line-demi"></div>
                        <div className="circle"></div>
                        <div className="line-demi"></div>
                    </div>
                  
                </div>
                <div className="welcome-body-right">
                    <div className="image-container">
                        <img src={Images.welcome}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomPage;
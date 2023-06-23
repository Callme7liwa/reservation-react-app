
import Navbar from "../components/Navbar/Navbar";

import Images from "../../Images";
import "./Welcome.css";

const WelcomPage = () => {
     const userData = JSON.parse(localStorage.getItem('user'));
     console.log(userData.usernom)
    return (
        <div className="welcome-page-container">
            
            <Navbar />

            <div className="welcome-body">
                <div className="welcome-body-left">
                    <div className="welcoming-title">
                        <h1> Welcome There  </h1>
                        {userData && (
                            <h1 className="name">{userData.usernom} {userData.userprenom} !</h1>
                        )}
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
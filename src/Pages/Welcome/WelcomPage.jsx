<<<<<<< HEAD
import Navbar from "../components/Navbar/Navbar";
=======
import Images from "../../Images";
>>>>>>> 590b83dd2ebb3a19c43a73d8f5f0a2fe8e534f38
import "./Welcome.css";

const WelcomPage = () => {
    return (
        <div className="welcome-page-container">
            
            <Navbar />

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
<<<<<<< HEAD
=======
                    <div className="image-container">
                        <img src={Images.welcome}></img>
                    </div>
>>>>>>> 590b83dd2ebb3a19c43a73d8f5f0a2fe8e534f38
                </div>
            </div>
        </div>
    )
}

export default WelcomPage;
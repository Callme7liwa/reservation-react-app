import Navbar from "../components/Navbar/Navbar";
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
                </div>
            </div>
        </div>
    )
}

export default WelcomPage;
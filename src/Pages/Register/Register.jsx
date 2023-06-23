import { useState } from "react";
import Images from "../../Images";
import CustomFloattingInput from "../components/Input";
import "./Register.css";

const  RegisterPage = () => {

    const [usernom,setnom] = useState("");
    const [userprenom,setprenom] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const  SubmitRegister = async () => {
        if( usernom.length <=0 || userprenom.length <=0 || email.length <=0 || password.length <=0 )
        alert("please fill all the inputs ");
        else {
            try {
                const response = await fetch('http://localhost:3000/users', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({usernom,userprenom,email, password }),
                  
                });
          console.log(response)
                if (response.ok) {
                    const { message, data } = await response.json();
                    console.log(message); // Display success message or redirect to another page
                    console.log(data); // Use the registered user data if needed
                  alert("register successfull");
                  window.location.href = "/";
                } else{
                  const { message } = await response.json();
                  console.log(message); // Afficher un message d'erreur si les identifiants sont invalides
                }
              } catch (error) {
                console.log(error);
              }
            };
    }
    

    return (
        <div className="login-page-container">
            <div className="reservation-page_left">
                <div className="image-container">
                    <img src={Images.login_image} />
                </div>

                <div className="icon-container">
                    <img src={Images.icon_flash} />
                </div>
                
                <div className="reservation-page_citation">
                    <span>
                        "In the study room, let your dreams blossom and your ideas take flight. Reserve your spot to embrace the power of knowledge and open the doors to your success."
                    </span>
                </div>

                <div className="icon-container">
                    <img src={Images.icon_flash} />
                </div>

                <div className="reservation-page_title">
                    <h1> StudyConnect </h1>
                </div>
            </div>
            <div className="reservation-page_right">
                <div className="reservation-page-right_content">
                    <div className="icon-container">
                        <img src={Images.icon_login} />
                    </div>
                    <div className="reservation-page-right_titles">
                        <span className="first-title">
                            hello again !
                        </span>
                        <span className="second-title">
                            Welcome back , you have been missed &lt;3 
                        </span>
                        <div className="line-decoration">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                    </div>
                    <div className="reservation-page-right_inputs">
                        
                        <div className="inputs-adaptation">
                            <div className="input-container input-register-container">
                                <label>
                                    <img src={Images.user_icon} />
                                    <span> Your Firstname</span>
                                </label>
                                <input
                                    type= "text"
                                    placeholder="enter u're first name"
                                    onChange={(e) => setprenom(e.target.value)}
                                />
                            </div>
                            <div className="input-container input-register-container">
                                <label>
                                    <img src={Images.user_icon} />
                                    <span> Your Lastname</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="enter u're last name"
                                    onChange={(e) => setnom(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div className="inputs-adaptation">
                            <div className="input-container input-register-container">
                                <label>
                                    <img src={Images.icon_email} />
                                    <span> Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="hatim@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-container input-register-container">
                                <label>
                                    <img src={Images.icon_password} />
                                    <span> Your Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="*********"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                        </div>
                        
                    </div>
                    <div className="submit-button submit-register" onClick={SubmitRegister}>
                        <div className="submit-button-container">
                            <span> Register </span>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default RegisterPage ; 




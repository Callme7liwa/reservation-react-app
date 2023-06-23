import { useState,useEffect } from "react";
import Images from "../../Images";
import CustomFloattingInput from "../components/Input";
import "./Login.css";
import { Link  } from "react-router-dom";

const  LoginPage = () => {

  
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const  SubmitLogin = async () => {
        if(email.length <=0 || password.length <=0)
        alert("please fill all the inputs ");
        else {
            try {
                const response = await fetch('http://localhost:3000/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email, password }),
                  
                });
          console.log(response)
                if (response.ok) {
                  const { message, data, token } = await response.json();
                  console.log(message); // Afficher un message de succès ou rediriger vers une autre page
                  console.log(data); // Utiliser les données de l'utilisateur si nécessaire
                  console.log(token); // Enregistrer le jeton JWT dans le local storage ou le contexte d'authentification
                  localStorage.setItem('token', token);
                  localStorage.setItem('user', JSON.stringify(data));
                  window.location.href = "/welecome";
                } else {
                    alert("email or paswword is incorrect");

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
                
                {/* <div className="list-letters">
                    {
                        letters.map(letter=>(
                            <span>{letter}</span>
                        ))
                    }
                </div> */}

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
                        <div className="input-container">
                            <label>
                                <img  src={Images.icon_email}/>
                                <span> Your Email</span>
                            </label>
                            <input 
                                type="email"
                                placeholder="hatim@gmail.com"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <label>
                                <img  src={Images.icon_password}/>
                                <span> Your Password</span>
                            </label>
                            <input 
                                type="password"
                                placeholder="*********"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="submit-button" onClick={SubmitLogin}>
                        <div className="submit-button-container">
                            <span> Login </span>
                        </div>
                    </div>
                    <div className="register-here" >
                        <span>If u dont have an account yet , </span>
                        <span> <Link to="/register">register here</Link> </span>
                    </div>
                    <div className="register-line">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage ; 




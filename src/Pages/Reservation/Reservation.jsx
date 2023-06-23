import Navbar from "../components/Navbar/Navbar";
import "./Reservation.css";
import Images from "../../Images";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import { useState,useEffect } from "react";


const Reservation = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const [salles, setSalles] = useState([]);
  
    useEffect(() => {
      const token = localStorage.getItem('token');
  
      const fetchSallesDispo = async () => {
        try {
          const response = await fetch('http://localhost:3000/salle/salledispo', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            setSalles(data);
          } else {
            console.log('Erreur lors de la récupération des salles disponibles');
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchSallesDispo();
    }, []);

    const [reservationClicked , setReservationClicked] = useState(false);
    const [currentSalleIdClicked , setCurrentSalleIdClicked] = useState('');
    // const [userId,setuserId] = useState("");
    // const [salleId,setsalleId] = useState("");
    const [datereservation,setdatereservation] = useState("");
    const [datafinreservation,setdatefinreservation] = useState("");

  

    const handleReserve = (id) => {
            setCurrentSalleIdClicked(id)
            setReservationClicked(!reservationClicked);
    }
    const handlesubmitreservation = async () => {
        const token = localStorage.getItem('token');
        const userId=userData.id
        const salleId=currentSalleIdClicked
        try {
            const response = await fetch('http://localhost:3000/reservation', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({userId,salleId,datereservation, datafinreservation }),
              
            });
      console.log(response)
            if (response.ok) {
                const { message, data } = await response.json();
                console.log(message); // Display success message or redirect to another page
                console.log(data); // Use the registered user data if needed
              alert("reservation successfull");
              window.location.href = "/reservation";
            } else{
              const { message } = await response.json();
              console.log(message); // Afficher un message d'erreur si les identifiants sont invalides
            }
          } catch (error) {
            console.log(error);
          }
}

    return (
        <div  style={{height:"500vh"}} className="reservation-page-container">
            <Navbar />
            <div className="page-title">
                <h1>Make Your <br />Reservation <span>here !</span></h1>
            </div>
            <div className="list-reservation">
              {salles.map(salle=>(
                <ReservationCard 
                salle={salle}key={salle.id} id={salle.id} 
                batiment={salle.batiments} name={salle.nomsalle} 
                 handleClick={handleReserve}/>
              ))}
            </div>

            {
                reservationClicked === true  
                ? 
                (
                    <div className="pop-up-reservation-container">
                        <div className="pop-up-reservation-content">
                            <i className="fa fa-times" onClick={()=>setReservationClicked(!reservationClicked)}></i>
                            <div className="title"> make your reservation </div>
                            {/* <span style={{ display: 'none' }}>{setsalleId(currentSalleIdClicked)}</span>
                            <span style={{ display: 'none' }}>{setuserId.id}</span> */}
                            <div className="list-inputs">
                                <div className="input-container">
                                    <label> Date Debut </label>
                                    <input type="datetime-local" name="" onChange={(e) => setdatereservation(e.target.value)}/>
                                </div>
                                <div className="input-container">
                                    <label> Date Fin </label>
                                    <input type="datetime-local" name=""  onChange={(e) => setdatefinreservation(e.target.value)}/>
                                </div>
                            </div>
                            <div className="button-reservation"onClick={handlesubmitreservation}>Reserver</div>
                        </div>
                    </div>
                )
                :
                (<></>)
            }

            
        </div>
    )
}

export default Reservation ; 
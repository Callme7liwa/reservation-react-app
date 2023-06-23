import Navbar from "../components/Navbar/Navbar";
import "./Reservation.css";
import Images from "../../Images";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import { useState,useEffect } from "react";


const MyReservation = () => {
    
    const userData = JSON.parse(localStorage.getItem('user'));
    const [sallesuser, setSallesuser] = useState([]);
    const id =userData.id
    console.log(id)
    useEffect(() => {
      const token = localStorage.getItem('token');
  
      const fetchSallesuser = async () => {
        try {
          const response = await fetch(`http://localhost:3000/reservation/user/${id}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            setSallesuser(data);
            console.log(data)
          } else {
            console.log('Erreur lors de la récupération des salles disponibles');
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchSallesuser();
    }, []);

    



const handleRemoveReserve = async (id) => {
        try {
          const token = localStorage.getItem('token');
          console.log(id)
          const response = await fetch(`http://localhost:3000/reservation/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (response.ok) {
            alert('Reservation deleted successfully');
            // Perform any necessary actions after deletion
            window.location.href = "/myreservation";
          } else {
            console.log('Error deleting the reservation');
          }
        } catch (error) {
          console.error('An error occurred while deleting the reservation:', error);
        }
      };
      

    return (
        <div  style={{height:"500vh"}} className="reservation-page-container">
            <Navbar />
            <div className="page-title">
                <h1>you can see your <br />Reservation <span>here !</span></h1>
            </div>
            <div className="list-reservation">
              {sallesuser.map(salle=>(
                <ReservationCard key={salle.id} id={salle.id} batiment={salle.batiments} name={salle.nomsalle} handleClick={handleRemoveReserve}  nameButton={"Annuler"} buttonColor={"red"}/>
              ))}
            </div>

            
        </div>
    )
}

export default MyReservation ; 
import Images from "../../../Images";

const ReservationCard = ({name,id , batiment , handleClick , nameButton , buttonColor}) => {
    
    function getRandomColor() {
        const colors = [
          '#E53E3E', '#DD6B20', '#D69E2E', '#38A169', '#4FD1C5',
          '#4299E1', '#667EEA', '#9F7AEA', '#ED64A6', '#FC8181'
          // Add more colors here as needed
        ];
      
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      }

      const color = getRandomColor();

      


    return (
        <div className="reservation-item" key={id}>
            <div style={{ backgroundColor: color}} className="item_top">
                {batiment}
            </div>
            <div className="name">
                <img src={Images.icon_flash} /> Name  :: {name}
            </div>
            <div 
                className="button-reservation"
                style={{ backgroundColor: buttonColor !== undefined && buttonColor !== null ? buttonColor : "#4c46fe" }}
                onClick={()=>handleClick(id)}>
                {nameButton == null || nameButton == undefined ? "Reserver" : nameButton}
                </div>
        </div>
    )
}

export default ReservationCard;
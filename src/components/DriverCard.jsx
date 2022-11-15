import  './DriverCard.css';
import Rating from './Rating';


function DriverCard(props) {

    const {name, rating, img, car} = props

    return (
       <div className="driver-card">
            <div className="driver-img-container">
                <img className="user-img" src={img} alt="driver"></img>
            </div>
            <div className="driver-content">
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} - <span>{car.licensePlate}</span></p>
            </div>
       </div>
    );
  }
  
  export default DriverCard;
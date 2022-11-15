import  './IdCard.css';
import BorederBox from './UI/BorderBox';


function IdCard(props) {

    const {firstName, lastName, gender, height, birth, picture} = props
    const dateStr = birth.toDateString() 
  
    return (
        <BorederBox className="flex-start">
            <div className="user-img-container">
                <img className="user-img" src={picture} alt="user"></img>
            </div>
            <div className="user-content">
                <p>First Name: <span>{firstName}</span></p>
                <p>Last Name: <span>{lastName}</span></p>
                <p>Gender: <span>{gender}</span></p>
                <p>Height: <span>{height}</span></p>
                <p>Birth: <span>{dateStr}</span></p>
            </div>
        </BorederBox>
    );
  }
  
  export default IdCard;
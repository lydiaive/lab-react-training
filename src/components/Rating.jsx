import  './Rating.css';


function Rating(props) {

    const children = props.children

    function turnStars(stars) {
        let rating = Math.round(stars)
        let result = ('★'.repeat(rating)) + ('☆'.repeat(5-rating)) 
        return result
        }
    const rating = turnStars(children)
  
    return (
       <p className="rating">{rating}</p>
    );
  }
  
  export default Rating;
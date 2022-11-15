import  './Random.css';
import BorderBox from './UI/BorderBox';


function Random(props) {

    const {min, max} = props

    const ranNum = Math.floor(Math.random() * max) + min;
    
  
    return (
        <BorderBox className="text-padding">
            <p>Random value between {min} and {max} =&gt; {ranNum}</p>
        </BorderBox>
    );
  }
  
  export default Random;
import  './CreditCard.css';

import visalogo from './../assets/images/visa.png'
//import masterlogo from './../assets/images/master-card.svg'



function CreditCard(props) {

    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
 
    //hide the creditcard digits
    function maskify(cc) {
        let sign = '\u2022' //&#9679  U+00B7
        let result = (sign.repeat(cc.length -4)) + (cc.slice(-4))
        let res = [...result].map((d, i) => (i) % 4 === 0 ? ' ' + d : d).join('').trim()
        return res
        }

    const saveNumber = maskify(number)
  
    return (
        <div className="creditcard" style= {{color: color, backgroundColor: bgColor}}>
            <div className="creditcard-type">
                {type ==='Visa' && <img src={visalogo} className="creditcard-logo"></img>}
{/*                 {type ==='Master Card' && <img src={masterlogo} className="creditcard-logo"></img>}
 */}            </div>
            <div className="creditcard-number">
                <p>{saveNumber}</p>
            </div>
            <div className="creditcard-footer">
                <div className="date-name-contianer">
                    <p>Expires {expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        </div>

    );
  }
  
  export default CreditCard;
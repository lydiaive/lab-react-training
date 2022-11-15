import  './BoxColor.css';
import BorederBox from './UI/BorderBox';


function BoxColor(props) {

    const {r,g,b} = props

    let bgColor = `rgb(${r},${g},${b})`
    console.log(bgColor)

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')

    const hex = rgbToHex(r, g, b)
      
    return (
        <BorederBox className="center-item" style={{backgroundColor: bgColor}}>
            <div className="flex-column-center">
                <p>rgb({r},{g},{b})</p>
                <p>{hex}</p>
            </div>
        </BorederBox>
    );
  }
  
  export default BoxColor;
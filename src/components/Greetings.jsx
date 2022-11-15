import  './Greetings.css';
import BorederBox from './UI/BorderBox';

function Greetings(props) {

    const {lang, children} = props
    const translation = {
        de: 'Hallo',
        fr: 'Bonjour',
        en: 'Hello',
        es: 'Hola',
    }
    const greeting = translation[lang]
  
    return (
        <BorederBox className="text-padding">
            <p lang={lang}>{greeting} {children}</p>
        </BorederBox>
    );
  }
  
  export default Greetings;
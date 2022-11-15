import  './Section.css';

function Section(props) {

    //const classes = "" + props.className
    const headline = props.headline
  
    return (
        <section className="section-container">
            <h1>{headline}</h1>
            {props.children}
        </section>
    );
  }
  
  export default Section;
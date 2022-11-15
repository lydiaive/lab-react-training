import  './BorderBox.css';

function BorederBox(props) {

    const classes = "border-box-full-width " + props.className
    const styles = props.style
  
    return (
        <div className={classes} style={styles}>
            {props.children}
        </div>
    );
  }
  
  export default BorederBox;
import  './Box.css';

function Box(props) {

    const classes = props.className
    const styles = props.style
  
    return (
        <div className={classes} style={styles}>
            {props.children}
        </div>
    );
  }
  
  export default Box;
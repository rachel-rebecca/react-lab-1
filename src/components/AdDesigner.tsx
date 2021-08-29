import "./AdDesigner.css";
import {useState} from "react";



function AdDesigner () {
    const[support, setSupport] = useState("Chocolate");
    const[theme, setTheme] = useState(true);
    const[size, setSize] = useState(30);
 
    const styles = {
        fontSize: size
    }

    return(
        <div className="container">    
        <h2>Ad Designer</h2>
        <div className={theme ? "divVoteFor lightTheme" : "divVoteFor darkTheme"}>
            <p>Vote For</p>
            <h2 style={styles}>{support}</h2>
        </div>
        <div className="labelDiv">
            <label >
                <h3>What to Support</h3>
                <button disabled={support === "Chocolate"} onClick={() => {setSupport("Chocolate")}} >Chocolate</button>
                <button disabled={support === "Vanilla"} onClick={() => {setSupport("Vanilla")}} >Vanilla</button>
                <button disabled={support === "Strawberry"} onClick={() => {setSupport("Strawberry")}} >Strawberry</button>
            </label>
            <label>
                <h3>Color Theme</h3>
                <button disabled={theme === true} onClick={() => {setTheme(true)}}>Light</button>
                <button disabled={theme === false} onClick={() => {setTheme(false)}}>Dark</button>     
            </label>
            <label>
                <h3>Font Size</h3>
                <button disabled={size === 0} onClick={() => {setSize(size - 1)}}>Down</button>
                {size}
                <button disabled={size === 67} onClick={() => {setSize(size + 1)}}>Up</button>   
            </label>
        </div>
        </div>
       
    )
}

export default AdDesigner;
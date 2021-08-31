import {useState} from "react";
import "./Ad.css";

function Ad ({flavor, fontSize, darkTheme}:{flavor: string, fontSize: number, darkTheme: boolean}) {
    const[support, setSupport] = useState(flavor);
    const[theme, setTheme] = useState(darkTheme);
    const[size, setSize] = useState(fontSize);

    const styles = {
        fontSize: size
    }
return (
  
        <div className={theme ? "divVoteFor2 lightTheme" : "divVoteFor2 darkTheme"}>
            <p>Vote For</p>
            <h2 style={styles}>{support}</h2>
        </div>
 
    
)


}

export default Ad;
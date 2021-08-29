import "./Votes.css";
import { ProgressBar } from "react-bootstrap";
import {useState} from "react";


function Votes () {
    const[choc, setChoc] = useState(0);
    const[van, setVan] = useState(0);
    const[straw, setStraw] = useState(0);
    const total = choc + van + straw;


    return(
        <div className="container">
        <h2>Vote Here</h2>
        <button disabled={total >= 100} onClick={() => {setChoc(prev => prev + 1)}}>Chocolate</button>
        <button disabled={total >= 100} onClick={() => {setVan(prev => prev + 1)}}>Vanilla</button>
        <button disabled={total >= 100} onClick={() => {setStraw(prev => prev + 1)}}>Strawberry</button>

            <p>
                {total === 0 ? "No Votes" : ""}
            </p>

        <div className={choc === 0 ? "hidden" : "progressDiv"} > 
            <p className={choc === 0 ? "hidden" : ""}>
            Chocolate: {choc === 0 ? "" : choc} ({choc === 0 ? 0 : (choc / total * 100).toFixed(1)}%)
            <ProgressBar id="chocolate" now={choc} />
            </p>
            <p className={van === 0 ? "hidden" : ""}>
            Vanilla: {van === 0 ? "" : van} ({van === 0 ? 0 :(van / total * 100).toFixed(1)}%)
            <ProgressBar id="vanilla" now={van} />
            </p>
            <p className={straw === 0 ? "hidden" : ""}>
            Strawberry: {straw === 0 ? "" : straw} ({straw === 0 ? 0 : (straw / total * 100).toFixed(1)}%)
            <ProgressBar id="strawberry" now={straw} />
            </p>
        </div>
        
        
        
    </div>
    )
}

export default Votes;
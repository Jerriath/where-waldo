import { useState } from "react";
import { useLocation } from "react-router-dom";
import Beach from "../../assets/maps/beach.jpg";
import { createPointsArray } from "../HelperFunctions/gameFunctions";


const Game = () => {

    //useLocation is used to store the map level in so that the correct level will be displayed
    const location = useLocation();
    const level = location.state?.level;


    //useState used here to keep track of which characters have been found
    const [foundArray, setFoundArray] = useState([false, false, false, false, false]);




    return (
        <div className="Game" >
            <img className="gameLevel" alt="Map" src={level ? level:Beach} onClick={createPointsArray}/> 
        </div>
    )//The ternary statement used in the src attribute is there so that if someone routed to /Game without clicking a MapSelection, the defaul level will the level 1
}

export default Game;
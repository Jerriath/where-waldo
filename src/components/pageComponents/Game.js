import { useLocation } from "react-router-dom";
import Beach from "../../assets/maps/beach.jpg";


const Game = () => {

    //useLocation is used to store the map level in so that the correct level will be displayed
    const location = useLocation();
    const level = location.state?.level;

    //This function is used to create the points array that will be checked against the backend values
    //Basically if any point (including the center) falls between the bounds of the character (backend values), the character will be marked as found
    const createPointsArray = (e) => {
        let xCenter = e.clientX;
        let yCenter = e.clientY;
        let pointsArray = [[xCenter, yCenter]]
        pointsArray.push([xCenter - 25, yCenter + 25]);
        pointsArray.push([xCenter + 25, yCenter + 25]);
        pointsArray.push([xCenter - 25, yCenter - 25]);
        pointsArray.push([xCenter + 25, yCenter - 25]);
        console.log(pointsArray);
        return pointsArray;
    }

    return (
        <div className="Game" >
            <img className="gameLevel" alt="Map" src={level ? level:Beach} onClick={createPointsArray}/> 
        </div>
    )//The ternary statement used in the src attribute is there so that if someone routed to /Game without clicking a MapSelection, the defaul level will the level 1
}

export default Game;
import { useLocation } from "react-router-dom";
import Beach from "../../assets/maps/beach.jpg";


const Game = () => {

    const location = useLocation();
    const level = location.state?.level;
    console.log(level);

    return (
        <div className="Game" >
            <img className="gameLevel" alt="Map" src={level ? level:Beach} />
        </div>
    )
}

export default Game;
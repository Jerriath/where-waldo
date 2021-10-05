import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createPointsArray } from "../HelperFunctions/gameFunctions";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import Beach from "../../assets/maps/beach.jpg";
import CharacterDropdown from "../subcomponents/CharacterDropdown";



const Game = () => {

    //useLocation is used to store the map level in so that the correct level will be displayed
    const location = useLocation();
    const level = location.state?.level;


    //useState used here to keep track of which characters have been found
    const [foundArray, setFoundArray] = useState([false, false, false, false, false]);
    const [dropdown, setDropdown] = useState(null);

    const clickHandler = async (e) => {
        const pointsArray = createPointsArray(e);
        try {
            const answerRef = doc(db, "answers/beach");
            const answer = await getDoc(answerRef).then((doc) => doc.data());
            console.log(answer);
        }
        catch(error) {
            console.log("A weird error occured. Get it away!", error);
        }
    }


    const removeDropdown = () => {
        setDropdown(null);
    } //This is just here for testing rn; later this function will be the one to send the request to the backend and check the pointsArray against the answers

    const appendDropdown = (e) => {
        setDropdown(<CharacterDropdown removeDropdown={removeDropdown.bind(this)} foundArray={foundArray} xPos={e.clientX} yPos={e.clientY} />)
    }

    return (
        <div className="Game" >
            <img className="gameLevel" alt="Map" src={level ? level:Beach} onClick={appendDropdown}/> 
            {dropdown}
            <button onClick={clickHandler}>test button</button>
        </div>
    )//The ternary statement used in the src attribute is there so that if someone routed to /Game without clicking a MapSelection, the defaul level will the level 1
}

export default Game;


//Got firebase to work; answers are now stored in answer variable in the clickHandler function
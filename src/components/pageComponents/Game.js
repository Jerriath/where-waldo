import { useState } from "react";
import { useLocation } from "react-router-dom";
import Beach from "../../assets/maps/beach.jpg";
import { createPointsArray } from "../HelperFunctions/gameFunctions";
import { firestore } from "../../firebase-config.js";



const Game = () => {

    //useLocation is used to store the map level in so that the correct level will be displayed
    const location = useLocation();
    const level = location.state?.level;


    //useState used here to keep track of which characters have been found
    const [foundArray, setFoundArray] = useState([false, false, false, false, false]);

    const clickHandler = async () => {
        try {
            const answersRef = firestore.collection("answers").doc("beach");
            const answers = await answersRef.get().then((doc) => {
                if (doc) {
                    console.log("Retrieving answers...");
                    return doc.data();
                }
                else {
                    console.log("Error: Not sure what happened.")
                }
            })
            console.log(answers.waldo);
            console.log(answers.wedna);
            console.log(answers.wizard);
            console.log(answers.odlaw);
            console.log(answers.woof);
        }
        catch(error) {
            console.log("A weird error occured. Get it away!", error);
        }
    }


    return (
        <div className="Game" >
            <img className="gameLevel" alt="Map" src={level ? level:Beach} onClick={createPointsArray}/> 
            <button onClick={clickHandler}>test button</button>
        </div>
    )//The ternary statement used in the src attribute is there so that if someone routed to /Game without clicking a MapSelection, the defaul level will the level 1
}

export default Game;
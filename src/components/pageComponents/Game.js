import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createPointsArray, checkPointsArray } from "../HelperFunctions/gameFunctions";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import Beach from "../../assets/maps/beach.jpg";
import CharacterDropdown from "../subcomponents/gameComponents/CharacterDropdown";
import StartGame from "../subcomponents/gameComponents/StartGame";



const Game = () => {

    //useLocation is used to store the map level in so that the correct level will be displayed
    const location = useLocation();
    const level = location.state?.level;
    const map = location.state?.map;


    //useState used here to keep track of which characters have been found
    const [foundArray, setFoundArray] = useState([false, false, false, false, false]);
    const [dropdown, setDropdown] = useState(null);
    const [startTime, setStartTime] = useState(0);



    //Functions deal with calculating how long it took to find all characters
    const setStart = (e) => {
        let time = Math.floor(e.timeStamp) / 1000;
        setStartTime(time)
        setStartBtn(null);
    }

    const [startBtn, setStartBtn] = useState(<StartGame setStart={setStart.bind(this)}/>);

    const getTotalTime = (e) => {
        const start = startTime;
        let totalTime = Math.floor(((e.timeStamp / 1000) - start) * 1000) / 1000;
        console.log(totalTime);
    }




    //Function for dealing with async get request
    const fetchAnswers = async (character, map) => {
        try {
            const answerRef = doc(db, `answers/${map}`);
            const answer = await getDoc(answerRef).then((doc) => doc.data());
            switch (character) {
                case "Waldo" :
                    return answer.waldo;
                case "Wenda" :
                    return answer.wenda;
                case "Wizard" :
                    return answer.wizard;
                case "Odlaw" :
                    return answer.odlaw;
                case "Woof" :
                    return answer.woof;
                default :
                    return null;
            }
        }
        catch(error) {
            console.log("A weird error occured. Get it away!", error);
        }
    }




    //Functions that deal with the dropdown list of characters
    const removeDropdown = async (pointsArray, character, map) => {
        const answer = await fetchAnswers(character, map);
        const found = checkPointsArray(answer, pointsArray);

        if (found) {
            let tempFoundArray = foundArray;
            switch (character) {
                case "Waldo" :
                    tempFoundArray[0] = true;
                    setFoundArray(tempFoundArray);
                    break;
                case "Wenda" :
                    tempFoundArray[1] = true;
                    setFoundArray(tempFoundArray);
                    break;
                case "Wizard" :
                    tempFoundArray[2] = true;
                    setFoundArray(tempFoundArray);
                    break;
                case "Odlaw" :
                    tempFoundArray[3] = true;
                    setFoundArray(tempFoundArray);
                    break;
                case "Woof" :
                    tempFoundArray[4] = true;
                    setFoundArray(tempFoundArray);
                    break;
                default :
                    break;
            }
        }
        
        setDropdown(null);
    } //This is just here for testing rn; later this function will be the one to send the request to the backend and check the pointsArray against the answers

    const appendDropdown = (e) => {
        const pointsArray = createPointsArray(e);
        setDropdown(<CharacterDropdown getTotalTime={getTotalTime.bind(this)} map={map} removeDropdown={removeDropdown.bind(this)} foundArray={foundArray} xPos={e.clientX} yPos={e.clientY} pointsArray={pointsArray} />)
    }




    return (
        <div className="game" >
            {startBtn}
            <img className="gameLevel" alt="Map" src={level ? level:Beach} onClick={appendDropdown}/> 
            {dropdown}
        </div>
    )//The ternary statement used in the src attribute is there so that if someone routed to /Game without clicking a MapSelection, the defaul level will the level 1
}

export default Game;


//Got firebase to work; answers are now stored in answer variable in the clickHandler function
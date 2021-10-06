import uniqid from "uniqid";
import "../styles.css";
import Waldo from "../../assets/characters/waldo.png";
import Wenda from "../../assets/characters/wenda.png";
import Wizard from "../../assets/characters/wizard.png";
import Odlaw from "../../assets/characters/odlaw.png";
import Woof from "../../assets/characters/woof.png";
import CharacterSelect from "./CharacterSelect";


//Want to pass a function for checking with backend through props; also want to pass a boolean array for which characters have not been found through props
const CharacterDropdown = (props) => {

    //Drop down will show names and sprites for the characters that have not been found
    const characterArray = [Waldo, Wenda, Wizard, Odlaw, Woof];
    const characterStrings = ["Waldo", "Wenda", "Wizard", "Odlaw", "Woof"];
    let xPos = props.xPos;
    let yPos = props.yPos;

    return (
        <div className="characterDropdown" style={{
            position: "absolute",
            top: `${yPos}px`,
            left: `${xPos}px`
        }}>
            {characterArray.map((character, index) => {
                if (!props.foundArray[index]) {
                    return <CharacterSelect foundArray={props.foundArray} getTotalTime={props.getTotalTime} map={props.map} removeDropdown={props.removeDropdown} imgSrc={character} name={characterStrings[index]} key={uniqid()} pointsArray={props.pointsArray} />
                }
                else {
                    return null;
                }
            })}
        </div>
    )
}

export default CharacterDropdown;

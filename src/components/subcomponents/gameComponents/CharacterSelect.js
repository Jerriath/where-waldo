import "../../styles.css";
import { checkFoundArray } from "../../HelperFunctions/gameFunctions";


const CharacterSelect = (props) => {

    const clickHandler = async (e) => {
        await props.removeDropdown(props.pointsArray, props.name, props.map);
        let status = checkFoundArray(props.foundArray);
        if (status) {
            props.getTotalTime(e);
        }
    }

    return (
        <div className="characterSelect" onClick={clickHandler}>
            <h3 className="characterName">{props.name}</h3>
            <img className="legendImg" src={props.imgSrc} alt="character legend" />
        </div>
    )
}

export default CharacterSelect;
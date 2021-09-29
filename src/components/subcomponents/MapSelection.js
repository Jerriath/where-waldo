import uniqid from "uniqid";
import "../styles.css";
import Waldo from "../../assets/characters/waldo.png";
import Wenda from "../../assets/characters/wenda.png";
import Wizard from "../../assets/characters/wizard.png";
import Odlaw from "../../assets/characters/odlaw.png";
import Woof from "../../assets/characters/woof.png";



const MapSelection = (props) => {

    const characterArray = [Waldo, Wenda, Wizard, Odlaw, Woof];


    return (
        <div className="mapSelection" >
            <h3 className="mapName">{props.mapName}</h3>
            <img className="cardImg" src={props.mapSrc} alt={props.mapName} />
            <div className="mapLegend">
                {characterArray.map((character) => {return <img src={character} alt="character" key={uniqid()}/>})}
            </div>
        </div>
    )
}

export default MapSelection;

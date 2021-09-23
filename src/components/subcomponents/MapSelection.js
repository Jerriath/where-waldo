import waldo from "../../assets/characters/waldo.png";
import wenda from "../../assets/characters/wenda.png";
import wizard from "../../assets/characters/wizard.png";
import woof from "../../assets/characters/woof.png";
import odlaw from "../../assets/characters/odlaw.png";
import uniqid from "uniqid";




const MapSelection = (props) => {



    return (
        <div className="mapSelection" >
            <div className="imageHolder" >
                <img src={props.imgSrc} alt="Map" />
            </div>
            <div className="levelInfo">
                <div className="levelName">

                </div>
                <div className="levelCharacters">
                    {props.characters.map((char) => {return <img src={char} key={uniqid()} alt="character"/>})}
                </div>
            </div>
        </div>
    )
}

export default MapSelection;
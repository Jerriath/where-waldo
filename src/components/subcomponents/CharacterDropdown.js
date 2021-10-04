import uniqid from "uniqid";
import "../styles.css";
import Waldo from "../../assets/characters/waldo.png";
import Wenda from "../../assets/characters/wenda.png";
import Wizard from "../../assets/characters/wizard.png";
import Odlaw from "../../assets/characters/odlaw.png";
import Woof from "../../assets/characters/woof.png";



const CharacterDropdown = (props) => {

    const characterArray = [Waldo, Wenda, Wizard, Odlaw, Woof];

    return (
        <div className="characterDropdown" >
            {}
        </div>
    )
}

export default CharacterDropdown;

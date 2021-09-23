import MapSelection from "../subcomponents/MapSelection";
import LeaderboardDiv from "../subcomponents/LeaderboardDiv";
import beach from "../../assets/maps/beach.jpg";
import carnival from "../../assets/maps/carnival.jpg";
import space from "../../assets/maps/space.jpg";
import snow from "../../assets/maps/snow.jpg";
import waldo from "../../assets/characters/waldo.png";
import wenda from "../../assets/characters/wenda.png";
import wizard from "../../assets/characters/wizard.png";
import woof from "../../assets/characters/woof.png";
import odlaw from "../../assets/characters/odlaw.png";



const MapSelect = () => {



    return (
        <div className="mapSelect" >
            <MapSelection imgSrc={beach} characters={[waldo, wenda, wizard, woof, odlaw]}/>
            <MapSelection imgSrc={carnival} characters={[waldo, wenda, wizard, woof, odlaw]}/>
            <MapSelection imgSrc={space} characters={[waldo, wenda, wizard, woof, odlaw]}/>
            <MapSelection imgSrc={snow} characters={[waldo, wenda, wizard, woof, odlaw]}/>
            <LeaderboardDiv />
        </div>
    )
}

export default MapSelect;
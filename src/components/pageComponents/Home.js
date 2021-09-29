import MapSelection from "../subcomponents/MapSelection";
import LeaderboardDiv from "../subcomponents/LeaderboardDiv";
import Beach from "../../assets/maps/beach.jpg";
import Carnival from "../../assets/maps/carnival.jpg";
import Snow from "../../assets/maps/snow.jpg";
import Space from "../../assets/maps/carnival.jpg";




const MapSelect = () => {



    return (
        <div className="home">
            <div className="mapSelect" >
                <MapSelection mapSrc={Beach} mapName="Level 1:  Beach" />
                <MapSelection mapSrc={Carnival} mapName="Level 2:  Carnival" />
                <MapSelection mapSrc={Snow} mapName="Level 3:  Snow" />
                <MapSelection mapSrc={Space} mapName="Level 4:  Space" />
            </div>
            <LeaderboardDiv />
        </div>
    )
}

export default MapSelect;
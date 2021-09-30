import MapSelection from "../subcomponents/MapSelection";
import LeaderboardDiv from "../subcomponents/LeaderboardDiv";
import Beach from "../../assets/maps/beach.jpg";
import Carnival from "../../assets/maps/carnival.jpg";
import Snow from "../../assets/maps/snow.jpg";
import Space from "../../assets/maps/space.jpg";
import { Link } from "react-router-dom";




const MapSelect = () => {



    return (
        <div className="home">
            <div className="mapSelect" >
                <Link to={{
                    pathname: "/Game",
                    state: {
                        level: Beach
                    }
                }}>
                    <MapSelection mapSrc={Beach} mapName="Level 1:  Beach" />
                </Link>
                <Link to={{
                    pathname: "/Game",
                    state: {
                        level: Carnival
                    }
                }}>
                    <MapSelection mapSrc={Carnival} mapName="Level 2:  Carnival" />
                </Link>
                <Link to={{
                    pathname: "/Game",
                    state: {
                        level: Snow
                    }
                }}>
                    <MapSelection mapSrc={Snow} mapName="Level 3:  Snow" />
                </Link>
                <Link to={{
                    pathname: "/Game",
                    state: {
                        level: Space
                    }
                }}>
                    <MapSelection mapSrc={Space} mapName="Level 4:  Space" />
                </Link>
            </div>
            <hr className="line" />
            <LeaderboardDiv />
        </div>
    )
}

export default MapSelect;
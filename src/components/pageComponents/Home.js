import MapSelection from "../subcomponents/homeComponents/MapSelection";
import LeaderboardDiv from "../subcomponents/homeComponents/LeaderboardDiv";
import Beach from "../../assets/maps/beach.jpg";
import Carnival from "../../assets/maps/carnival.jpg";
import Snow from "../../assets/maps/snow.jpg";
import Space from "../../assets/maps/space.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";




const Home = () => {

    const [maps, setMaps] = useState([null, null, null, null]);

    return (
        <div className="home">
            <div className="mapSelect" >
                <Link to={{
                    //The "to" attribute for the link tag is used to store the level image in order to update the image source of the /Game page
                    pathname: "/Game",
                    state: {
                        level: Beach,
                        map: "beach"
                    }
                }}>
                    <MapSelection mapSrc={Beach} mapName="Level 1:  Beach" />
                </Link>
                <Link to={{
                    pathname: "/Game",
                    state: {
                        level: Carnival,
                        map: "carnival"
                    }
                }}>
                    <MapSelection mapSrc={Carnival} mapName="Level 2:  Carnival" />
                </Link>
                <Link to={{
                    pathname: "/Game",
                    state: {
                        level: Snow,
                        map: "snow"
                    }
                }}>
                    <MapSelection mapSrc={Snow} mapName="Level 3:  Snow" />
                </Link>
                <Link to={{
                    pathname: "/Game",
                    state: {
                        level: Space,
                        map: "space"
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

export default Home;
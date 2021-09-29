import Logo from "../../assets/misc/logo.png";
import Waldo from  "../../assets/characters/waldo.png";
import "../styles.css";



const HomeLogo = () => {



    return (
        <div className="homeLogo" >
            <img className="logo" src={Logo} alt="Page logo" />
            <img className="logoImg" src={Waldo} alt="Page mascot" />
        </div>
    )
}

export default HomeLogo;
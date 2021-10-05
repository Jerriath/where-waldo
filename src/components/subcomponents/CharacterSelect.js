import "../styles.css";



const CharacterSelect = (props) => {



    return (
        <div className="characterSelect" onClick={props.removeDropdown}>
            <h3 className="mapName">{props.name}</h3>
            <img className="legendImg" src={props.imgSrc} alt="character legend" />
        </div>
    )
}

export default CharacterSelect;
import "../styles.css";



const CharacterSelect = (props) => {

    const clickHandler = async () => {
        props.removeDropdown(props.pointsArray, props.name, props.map)
    }

    return (
        <div className="characterSelect" onClick={clickHandler}>
            <h3 className="mapName">{props.name}</h3>
            <img className="legendImg" src={props.imgSrc} alt="character legend" />
        </div>
    )
}

export default CharacterSelect;




const StartGame = (props) => {

    let show = true;

    const clickHandler = (e) => {
        props.setStart(e);
        show = false;
    }

    if (show) {
        return (
            <div className="startGame" >
                <button className="startBtn" onClick={clickHandler} >Click To Begin!</button>
            </div>
        )
    }
    else {
        return null;
    }
        
}

export default StartGame;
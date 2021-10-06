



const StartGame = (props) => {


    return (
        <div className="startGame" >
            <button className="startBtn" onClick={props.setStart} >Click To Begin!</button>
        </div>
    )
}

export default StartGame;
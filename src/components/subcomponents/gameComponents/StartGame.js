



const StartGame = (props) => {


    return (
        <div className="darkBackground" >
            <button className="startBtn" onClick={props.setStart} >Click To Begin!</button>
        </div>
    )
}

export default StartGame;
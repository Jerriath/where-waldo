






const SidePanel = (props) => {



    return (
        <div className="sidePanel" >
            <h4 className="sidePanelTitle">Levels: </h4>
            <div className="sidePanelContent" >
                <button onClick={props.selectLevel} name="beach" className="levelSelect" >Level 1: Beach</button>
                <button onClick={props.selectLevel} name="carnival" className="levelSelect" >Level 2: Carnival</button>
                <button onClick={props.selectLevel} name="snow" className="levelSelect" >Level 3: Snow</button>
                <button onClick={props.selectLevel} name="space" className="levelSelect" >Level 4: Space</button>
            </div>
        </div>
    )
}

export default SidePanel;




const Snackbar = (props) => {


    return (
        <div className={props.holderClass}>
            <div className={props.className} >
                <h3 className="snackbarMsg" >{props.msg}</h3>
            </div>
        </div>   
    )
}

export default Snackbar;
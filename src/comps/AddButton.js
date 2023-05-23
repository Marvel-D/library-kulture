const AddBookBtn = (props) => {
    return (
        <div className="h-min">
            <button className="m-5 px-5 py-3 font-medium rounded-md bg-slate-400 hover:bg-slate-700 hover:text-green-300" onClick={props.handleClick}>{props.btn1}</button>
        </div>
    )
}

export default AddBookBtn;
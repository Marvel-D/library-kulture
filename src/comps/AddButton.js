const AddBookBtn = (props) => {
    return (
        <div className="h-min">
            <button className="m-5 px-5 py-3 font-medium bg-transparent hover:bg-gray-200 hover:text-red-600">{props.btn1}</button>
        </div>
    )
}

export default AddBookBtn;
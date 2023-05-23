const FormModal = (props) => {
    const { handleSubmit, handleChange, book, show } = props
    return (
        <>
            {
                show ?
                    <div className="absolute bg-slate-400 h-[500px] w-[400px] flex flex-col justify-center items-center">
                        <h3 className="font-bold text-lg">Add new book</h3>

                        <form onSubmit={handleSubmit} className="w-[100%] flex flex-col gap-5 justify-between items-center border border-neutral-800 px-10">
                            <label className="w-[100%] grid grid-cols-4 items-center gap-5 border border-neutral-800">
                                Title:
                                <input className="col-span-3 rounded-lg h-11 px-2"
                                    type="text"
                                    name="title"
                                    value={book.title || ""}
                                    onChange={handleChange}
                                ></input>
                            </label>

                            <label className="w-[100%] grid grid-cols-4 items-center gap-5 border border-neutral-800">
                                Author:
                                <input className="col-span-3 rounded-lg h-11 px-2"
                                    type="text"
                                    name="author"
                                    value={book.author || ""}
                                    onChange={handleChange}
                                ></input>
                            </label>

                            <label className="w-[100%] grid grid-cols-4 items-center gap-5 border border-neutral-800">
                                Pages:
                                <input className="col-span-3 rounded-lg h-11 px-2"
                                    type="text"
                                    name="pages"
                                    value={book.pages || ""}
                                    onChange={handleChange}
                                ></input>
                            </label>

                            <input type="submit" className="w-[100%] rounded-lg h-11 px-2 bg-emerald-400 border border-neutral-800"></input>
                        </form>
                    </div>
                    : null
            }
        </>

    )
}

export default FormModal;
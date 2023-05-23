import React, { useState } from "react";
import AddBookBtn from "../comps/AddButton";
import FormModal from "../comps/modal";


const libraryArr = [];

const CenterSect = () => {
    const [book, setBook] = useState({
        id: 0,
        title: "",
        author: "",
        pages: 0,
        status: true
    });
    const [library, setLibrary] = useState(libraryArr);
    const [modal, setModal] = useState(true)

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        setBook({
            ...book,
            id: book.id + 1
        })
        e.preventDefault();
        setModal(false)
        setLibrary(library.concat(book))
        console.log(library);
        console.log(book)
    };

    const handleToggle = () => setModal(!modal)
    return (
        <>
            <div className="h-[75vmin] flex flex-col items-center bg-slate-200 border border-neutral-800">
                <AddBookBtn handleClick={handleToggle} btn1={"Add book"}></AddBookBtn>
                <br></br>

                <FormModal show={modal} handleSubmit={handleSubmit} handleChange={handleChange} book={book}></FormModal>

                <div className="p-5 border border-neutral-800 w-[100%]">
                    <ul className="grid grid-cols-4 align-middle gap-4 justify-center">
                        {library.map((book) => {
                            return (
                                <li key={book.id} className="border border-neutral-800 h-40 flex flex-col justify-evenly items-center">
                                    <p><b>{book.title}</b></p>
                                    <p><b>{book.author}</b></p>
                                    <p><b>{book.pages + " pages"}</b></p>
                                    <p>{book.status}</p>
                                    <button><b>Remove</b></button>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CenterSect;

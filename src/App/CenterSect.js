import React, { useState } from "react";
import AddBookBtn from "../comps/AddButton";

const libraryArr = [];

const CenterSect = () => {
    const [book, setBook] = useState({
        id: 0,
        title: "",
        author: "",
        status: true
    });
    const [library, setLibrary] = useState(libraryArr);

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
        setLibrary(library.concat(book))
        console.log(library);
        console.log(book)
    };

    return (
        <>
            <div className="h-96 grid grid-cols-2 justify-center items-center border border-neutral-800">
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter Title:
                        <input
                            type="text"
                            name="title"
                            value={book.title || ""}
                            onChange={handleChange}
                        ></input>
                    </label>

                    <label>
                        Enter author:
                        <input
                            type="text"
                            name="author"
                            value={book.author || ""}
                            onChange={handleChange}
                        ></input>
                    </label>
                    <input type="submit"></input>
                    {/* <AddBookBtn btn1={"Add Book"}></AddBookBtn> */}
                </form>
                <div>
                    <ul>
                        {library.map((book, index) => {
                            return (
                                <li key={book.id}>
                                    <p>{book.title + ' ' + book.author}</p>
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

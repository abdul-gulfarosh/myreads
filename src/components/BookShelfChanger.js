import { useRef } from "react";

function BookShelfChanger({OnUpdateBook, book}){
    const elementRef = useRef();
    const handleSelection = () => OnUpdateBook(book, elementRef.current.value);

    return(
        <div className="book-shelf-changer">
            <select ref={elementRef} onChange={handleSelection} value={book.shelf}>
            <option value="one" disabled>
                Move to...
            </option>
            <option value="currentlyReading">
                Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
    );
}

export default BookShelfChanger;
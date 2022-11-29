import BookInfo from "./BookInfo";

function BookGrid({ books, OnUpdateBook }) {
	return (
		<ol className="books-grid">
			{
				books.map(book => <li key={book.id}><BookInfo book={book} OnUpdateBook={OnUpdateBook} /> </li>)
			}
		</ol>
	)
}

export default BookGrid;
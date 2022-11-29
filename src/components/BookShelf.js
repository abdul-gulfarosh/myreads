import BookGrid from "./BookGrid";

function BookShelf({ books, shelf, OnUpdateBook }) {

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf}</h2>
			<div className="bookshelf-books">
				<BookGrid books={books} OnUpdateBook={OnUpdateBook} />
			</div>
		</div>
	)
}

export default BookShelf;
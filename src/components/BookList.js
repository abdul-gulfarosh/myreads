import BookShelf from './BookShelf';
import { Link } from 'react-router-dom'

function BookList({ books, OnUpdateBook }) {
	let currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading");
	let readBooks = books.filter(book => book.shelf === "read");
	let wantToReadBooks = books.filter(book => book.shelf === "wantToRead");

	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<BookShelf OnUpdateBook={OnUpdateBook} books={currentlyReadingBooks} shelf="Currently Reading" />
					<BookShelf OnUpdateBook={OnUpdateBook} books={wantToReadBooks} shelf="Want To Read" />
					<BookShelf OnUpdateBook={OnUpdateBook} books={readBooks} shelf="Read" />
				</div>
			</div>
			<div className="open-search">
				<Link to='/search'>Add a book</Link>
			</div>
		</div>
	)
}

export default BookList;
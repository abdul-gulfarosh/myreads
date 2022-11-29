import BookShelfChanger from "./BookShelfChanger";

function BookInfo({ book, OnUpdateBook }) {
	return (
		<div>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${book.imageLinks.thumbnail})`,
						}}
					></div>
					<BookShelfChanger book={book} OnUpdateBook={OnUpdateBook} />
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors"> {!book.authors ? "" : book.authors.join()}</div>
			</div>
		</div>
	)
}

export default BookInfo;
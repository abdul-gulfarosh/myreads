import BookGrid from "./BookGrid";
import { useState, useEffect } from "react";
import * as BooksAPI from "./../BooksAPI"
import { Link } from "react-router-dom";

function SearchPage({ books, OnUpdateBook }) {

	const [filteredBooks, setFilteredBooks] = useState([]);
	const [transformedBooks, setTransformedBooks] = useState([]);
	const [query, setQuery] = useState("");
	const updateQuery = (query) => {
		setQuery(query);
	};

	const transformBooks = (src, target) => {
		let shelfBooks = src.filter(book =>
			book.shelf === "currentlyReading" ||
			book.shelf === "read" ||
			book.shelf === "wantToRead");

		let shelfMap = shelfBooks.reduce(
			(acc, o) => {
				acc[o['id']] = o;
				return acc;
			}, {});

		let transformedFilterBooks = target.map(book => {
			book = { shelf: 'none', ...book }
			if (shelfMap[book.id]) {
				book = { ...book, ...shelfMap[book.id] }
			}
			return book;
		})

		return transformedFilterBooks;
	}

	useEffect(() => {
		const search = async () => {
			const res = await BooksAPI.search(query.trim(), 20);
			!res.error ?
				setFilteredBooks(res.filter(book => !!book.imageLinks && !!book.imageLinks.thumbnail)) :
				setFilteredBooks([]);
		};

		if (query.trim() !== "") {
			try {
				search();
			}
			catch {
				console.log("error")
				setFilteredBooks([]);
			}
		}
		else {
			setFilteredBooks([]);
		}
	}, [query])

	useEffect(() => {
		setTransformedBooks(transformBooks(books, filteredBooks));
	}, [books, filteredBooks]);

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/"
					className="close-search"
				>
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						placeholder="Search by title, author, or ISBN"
						value={query}
						onChange={(event) => updateQuery(event.target.value)}
					/>
				</div>
			</div>
			<div className="search-books-results">
				<BookGrid books={transformedBooks} OnUpdateBook={OnUpdateBook} />
			</div>
		</div>)
}

export default SearchPage;
import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import { Route, Routes } from 'react-router-dom'

import SearchPage from "./components/SearchPage";
import BookList from "./components/BookList";

function App() {
	const [showSearchPage, setShowSearchpage] = useState(true);
	const toggleSearch = () => setShowSearchpage(!showSearchPage)
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const getBooks = async () => {
			const res = await BooksAPI.getAll();
			setBooks(res);
		};

		getBooks();
	}, []);

	function updateBook(book, shelf) {
		const update = async () => {
			await BooksAPI.update(book, shelf);
			let updatedBook = { ...book, shelf: shelf };
			setBooks([...books.filter(bk => bk.id !== book.id), updatedBook]);
		};
		update();
	}

	return (
		<div className="app">
			<Routes>
				<Route path="/" exact element={
					<BookList onToggleSearch={toggleSearch} books={books} OnUpdateBook={updateBook} />} >
				</Route>
				<Route path="/search" exact element={
					<SearchPage onToggleSearch={toggleSearch} books={books} OnUpdateBook={updateBook} />} >
				</Route>
			</Routes>
		</div>
	);
}

export default App;

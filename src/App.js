import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

/**
 * The Primary React App File
 */
class BooksApp extends React.Component {

    state = {
        books: []
    };

    componentDidMount(){
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            });
    }

    /**
     * moves book to new shelf
     * @param book
     */
    moveBook = (selectedBook, shelf) => {
        BooksAPI.update(selectedBook,shelf)
            .then(response => {
                selectedBook.shelf = shelf;

                this.setState(currentState => ({
                    books: currentState.books
                        .filter(book => book.id !== selectedBook.id)
                        .concat(selectedBook)
                }));
            });
    };

    render() {
        const { books } = this.state;

        return (
            <div className="app">

                <Route exact path='/search' render={({ history }) => (
                    <SearchBooks
                        books={this.state.books}
                        onSelectShelf = {(bookId) => {
                            this.moveBook(bookId);
                            history.push('/')
                        }}
                    />
                )} />

                <Route exact path='/' render={({ history }) => (
                    <ListBooks
                        books={this.state.books}
                        onSelectShelf = {(bookId) => {
                            this.moveBook(bookId);
                            history.push('/')
                        }}
                    />

                    )} />
            </div>
        )
    }
}

export default BooksApp

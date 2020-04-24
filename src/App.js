import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


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
    moveBookShelf = (selectedBook, shelf) => {
        BooksAPI.update(selectedBook,shelf)
            .then(response => {
                selectedBook.shelf = shelf;

                this.setState(currentState => ({
                    books: currentState.books.filter(book => book.id !== selectedBook.id).concat(selectedBook)
                }));
            });
    };

    render() {
        const { books } = this.state;

        return (
            <div className="app">

                <Route exact path='/search' render={() => (
                    <SearchBooks
                        books={books}
                        moveBookShelf = {this.moveBookShelf}
                    />
                )} />

                <Route exact path='/' render={() => (
                    <ListBooks
                        books={books}
                        moveBookShelf = {this.moveBookShelf}
                    />
                )} />
            </div>
        )
    }
}

export default BooksApp

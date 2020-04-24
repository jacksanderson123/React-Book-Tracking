import React, {Component} from 'react'
import { Link } from "react-router-dom";
import BookShelf from './BookShelf'
import propTypes from 'prop-types'

class ListBooks extends  Component {

    static propTypes = {
        books: propTypes.array,
        moveBookShelf: propTypes.func.isRequired
    };


    render() {
        const { books } = this.props;
        const { moveBookShelf } = this.props;
        console.log(books)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {books.length > 0 && (
                <div className="list-books-content">
                    <BookShelf
                        shelfTitle='Currently Reading'
                        shelfName='currentlyReading'
                        books = {books}
                        moveBookShelf = {moveBookShelf}
                    />
                    <BookShelf
                        shelfTitle='Want to Read'
                        shelfName='wantToRead'
                        books = {books}
                        moveBookShelf={moveBookShelf}

                    />

                    <BookShelf
                        shelfTitle='Read'
                        shelfName='read'
                        books = {books}
                        moveBookShelf={moveBookShelf}
                    />
                </div>
                )}
                <div className="open-search">
                    <Link to='/search' >
                        <button>Add a book</button>
                    </Link>
                </div>

            </div>
        )
    }
}
export default ListBooks
import React, {Component} from 'react'
import { Link } from "react-router-dom";
import BookShelf from './BookShelf'
import * as BooksAPI from "./BooksAPI";
import propTypes from 'prop-types'

class ListBooks extends  Component {

    static propTypes = {
        books: propTypes.array
    };

    componentDidMount(){
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }

    render() {
        const { books } = this.props;
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
                    />
                    <BookShelf
                        shelfTitle='Want to Read'
                        shelfName='wantToRead'
                        books = {books}

                    />
                    <BookShelf
                        shelfTitle='Read'
                        shelfName='Read'
                        books = {books}
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
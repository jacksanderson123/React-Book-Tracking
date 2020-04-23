import React, {Component} from 'react'
import propTypes from 'prop-types'
import Book from './Book'
class BookShelf extends  Component {

    static propTypes = {
        shelfName: propTypes.string.isRequired,
        books: propTypes.array.isRequired
    };


    render() {
        const { shelfTitle, shelfName, books } = this.props;

        // Get's books for current shelf
        var currentBooks = books.filter(function(book) {
            return book.shelf.toLowerCase() === shelfName.toLowerCase();
        });

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle} ({currentBooks.length})</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { currentBooks.length > 0 && currentBooks.map((book) => (
                        <li key={book.id}>
                            <Book  book={book} />
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default BookShelf

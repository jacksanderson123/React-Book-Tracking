import React, {Component} from 'react'
import propTypes from 'prop-types'
import Book from './Book'
class BookShelf extends  Component {

    static propTypes = {
        shelfName: propTypes.string.isRequired,
        books: propTypes.array.isRequired,
        moveBookShelf: propTypes.func.isRequired
    };


    render() {
        const { shelfTitle, shelfName, books } = this.props;
        const  {moveBookShelf} = this.props

        // Get's books for current shelf
        const currentBooks = books.filter(book => book.shelf === shelfName);

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle} ({currentBooks.length})</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { currentBooks.length > 0 && currentBooks.map((book) => (
                        <li key={book.id}>
                            <Book  book={book} moveBookShelf={moveBookShelf} />
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default BookShelf

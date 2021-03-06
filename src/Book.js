import React, {Component} from 'react'
import propTypes from 'prop-types'
class Book extends  Component {
    static propTypes = {
        book: propTypes.object.isRequired,
        moveBookShelf: propTypes.func.isRequired
    };
    moveBookShelf = (e) => {
        e.preventDefault();
        const newShelf = e.target.value;
        const book = this.props.book;

        this.props.moveBookShelf(book, newShelf)
    };

    render() {
        const { book } = this.props;

        // This will handel books without a thumbnail
        if (!book.imageLinks) {
            book.imageLinks = {
                'thumbnail': '#',
                'smallThumbnail': '#'
            }

        }

        return (
            <div className="book" id={book.id}>
                {/*{book.imageLinks}*/}
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}/>
                    <div className="book-shelf-changer">
                        <select id={book.id} onChange={this.moveBookShelf} value={book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                { book.authors && book.authors.map((author, index) => (
                    <p key={index}>{author}</p>
                ))}
                </div>
            </div>
        );
    }

}
export default Book
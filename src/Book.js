import React, {Component} from 'react'
import propTypes from 'prop-types'
class Book extends  Component {
    static propTypes = {
        book: propTypes.object.isRequired
    };

    onClick = (e) => {
        e.preventDefault();
        // determin the selected value
        // return the updated id to the books API
        console.log(e.target.id)
    };

    render() {
        const { book } = this.props;
        console.log(book);
        return (
            <div className="book" id={book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}/>
                    <div className="book-shelf-changer">
                        <select id={book.id} onChange={this.onClick} value={book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">Harper Lee</div>
            </div>
        );
    }

}
export default Book
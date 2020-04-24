import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import * as BooksAPI from "./BooksAPI";
import Book from "./Book"

class SearchBooks extends Component {

    static propTypes = {
        books: propTypes.array.isRequired,
        moveBookShelf: propTypes.func.isRequired
    };

    state = {
        query: '',
        searchResultBooks: []
    };

    searchQuery = (query) => {
        this.setState({ query: query });

        if(query) {
            BooksAPI.search(query.trim(), 20)
                .then(books => {
                    books.length > 0
                        ? this.setState({searchResultBooks: books })
                        : this.setState({searchResultBooks: []})
                })
        }else{
            this.setState({searchResultBooks: []})
        }

    };



    render() {
        const { query,searchResultBooks } = this.state;
        const { moveBookShelf } = this.props;


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={'/'} className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        <input
                            type='text'
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.searchQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { searchResultBooks.length > 0 && searchResultBooks.map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    moveBookShelf={moveBookShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBooks
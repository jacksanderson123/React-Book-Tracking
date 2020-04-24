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
        searchResultBooks: [],
    };

    searchQuery = (query) => {
        this.setState({ query: query });

        if (!query){
            this.setState({searchResultBooks: []})
        }else{
            BooksAPI.search(query.trim(), 20)
                .then(searchBooks => {
                    // Loop the searched books
                    searchBooks.forEach(searchBook => {
                        // loop all books against search set shelf
                        searchBook.shelf = 'none';
                        this.props.books.forEach(propBook => {
                            if(searchBook.id === propBook.id){
                                (searchBook.shelf = propBook.shelf )
                            }
                        });

                    });
                    searchBooks.length > 0
                        ? this.setState({searchResultBooks: searchBooks })
                        : this.setState({searchResultBooks: []})
                })
        }
    };



    render() {
        const { query,searchResultBooks} = this.state;
        const { moveBookShelf, books } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={'/'} className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        <input
                            type='text'
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.searchQuery(event.target.value, books)}
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
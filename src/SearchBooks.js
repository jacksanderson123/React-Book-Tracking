import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component {

    static propTypes = {
        books: propTypes.array,
        onSelectShelf: propTypes.func.isRequired,
    };

    state = {
        query: ''
    };

    updateQuery = (query) => {
        this.setState(() =>({
            query: query
        }));
    };



    render() {
        const {query} = this.state;
        const { books, onSelectShelf } = this.props;

        const searchResults = BooksAPI.search(query);



        console.log(searchResults);


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={'/'} className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type='text'
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/*{ this.state.books.length > 0 && this.state.books.map((book) => (*/}
                            {/*<li>*/}
                                {/*<Book*/}
                                    {/*book={book} />*/}
                            {/*</li>*/}
                        {/*))}*/}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBooks
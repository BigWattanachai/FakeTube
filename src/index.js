import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBb4vKpZ5RhasCoiKC66u1cFGjMHFmtWmE';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDom.render(
    <App/>, document.querySelector('.container'));
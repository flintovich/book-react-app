import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Navigation from './components/Navigation';
import BooksList from './components/BooksList';
import Books from './components/Books';
import AuthorList from './components/AuthorList';
import BookPage from './components/BookPage';
import AuthorPage from './components/AuthorPage';
import CategoryList from './components/CategoryList';

const API_PREFIX = 'http://localhost:3000';
export default API_PREFIX;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  getNavItems() {
    return [
      {
        url: '#book-list',
        title: 'Books list'
      },
      {
        url: '#authors-list',
        title: 'Authors list'
      }
    ];
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Navigation items={this.getNavItems()}/>
          <Router>
            <Route path="/" component={BooksList}></Route>
            <Route path="/book-list" component={BooksList}></Route>
            <Route path="/book-list/:bookId" component={BookPage}/>
            <Route path="/authors-list" component={AuthorList}></Route>
            <Route path="/authors-list/:authorId" component={AuthorPage}></Route>
            <Route path="/category/:categoryId" component={CategoryList}></Route>
          </Router>
        </div>
      </div>
    );
  }
}

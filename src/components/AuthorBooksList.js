import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.books.map(function(book){
          return (
            <li>
              <h3 className="title"><a href={`#book-list/${book.id}`}>{book.title}</a></h3>
            </li>
          )
        })}
      </ul>
    )
  }
}
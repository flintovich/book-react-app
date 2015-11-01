import React, { Component } from 'react';
import AuthorBooksList from './AuthorBooksList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openClose() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const itemData = this.props.data;
    return (
      <div>
        <h3 onClick={this.openClose.bind(this)}>{itemData.name}</h3>
        {this.state.isOpen ?
          <span className="drop text-left">
            <ul className="nav nav-pills nav-stacked">
              <li><a href={`#authors-list/${itemData.id}`}>Смотреть профиль</a></li>
              <AuthorBooksList books={itemData.books}/>
            </ul>
          </span>
        : null}
      </div>
    );
  }
}
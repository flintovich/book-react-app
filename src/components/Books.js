import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.booksItems.map(function(item){
          return (
            <li className='col-md-6'>
              <div className="thumbnail text-center">
                <a href={`#book-list/${item.id}`}><img src={item.image} alt={item.title}/></a>
                <h3 className="title"><a href={`#book-list/${item.id}`}>{item.title}</a></h3>
                <div><a href={`#authors-list/${item.authorID}`}>{item.author}</a></div>
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
}
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navItems = this.props.items;
    return (
      <nav>
        <ul className='nav nav-pills nav-stacked'>
          {navItems.map(function(item){
            return <li><a href={item.url}>{item.title}</a></li>;
          })}
        </ul>
      </nav>
    );
  }
}
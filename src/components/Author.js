import React, { Component } from 'react';
import Opener from './Opener';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.itemData;
    return (
      <ul>
        {item.map(function(item){
          return (
            <li className="col-md-6">
              <div className="author thumbnail text-center">
                <Opener data={item}/>
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
}
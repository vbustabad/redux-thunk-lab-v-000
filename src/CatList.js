import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {

  render() {

    let cats = this.props.catPics.map(catPic => <img key={catPic.id}>{catPic}</img>);

    return (
      <div>
        <ul>
          {cats}
        </ul>
      </div>
    );
  }
};
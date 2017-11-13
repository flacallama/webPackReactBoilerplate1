import React from "react";
import Main from './Main'


export default class Layout extends React.Component {

  render() {
    return (
      <div className="test">
        <h1>Layout is rendering</h1>
        <Main />
      </div>
    );
  }
}

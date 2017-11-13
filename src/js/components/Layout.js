import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "it workssssssss",
    };
  }

  changeTitle(title) {
    // es6 version of title: title
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <div class="test">
          <h1>not typed uppercase</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

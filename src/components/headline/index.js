import React, { Component } from "react";

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null; // jesli jednak nie masz headera to nie wyrenderujesz tego diva o kalsie main itd tylko nic nie wyrenderujesz bo wejdzie w tego ifa, i zwróci null a retrun zakończy tę funkcję
    }

    return (
      <div className="main" data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="descWrapper">{desc}</p>
      </div>
    );
  }
}

export default Headline;

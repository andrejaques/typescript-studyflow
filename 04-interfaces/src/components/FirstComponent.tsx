import * as React from "react";

import Logo from '../assets/try02.svg';

export default class FirstComponent extends React.Component <{}> {
  render() {
    return (
      <div>
        <h3>A Simple React Component Example with Typescript</h3>
        <div>
          <img height="350" src={ Logo } /> 
        </div>
        <p>Hex Coder Studio</p>
      </div>
    );
  }
}

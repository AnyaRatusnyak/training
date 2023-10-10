import React from "react";
import { PureComponent } from "react";

export class ButtonClass extends PureComponent {
  state = { counter: 0 };
  private_increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.private_increment}
        >
          Clicked {this.state.counter} times
        </button>
      </div>
    );
  }
}

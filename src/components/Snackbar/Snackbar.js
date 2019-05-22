import React, { PureComponent } from 'react';

export class Snackbar extends PureComponent {
  message = ''

  state = {
    isActive: false,
  }

  openSnackBar = (message = 'Something went wrong...') => {
    this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 2000);
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className = {isActive ? ["snackbar", "show"].join(" ") : "snackbar"}>
        {this.message}
      </div>
    )
  }
}

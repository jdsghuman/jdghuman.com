import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  // Open URL in new tab
  click = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  }

  delete = (id) => {
    
  }

  render() {
    return (
      <button 
        onClick={() => this.click(this.props.url)} 
        className={this.props.classes} 
        style={this.props.style}>{this.props.children}</button>
    );
  }
}

export default Button;
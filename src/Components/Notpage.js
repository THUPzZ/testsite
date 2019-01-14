import React, { Component } from 'react';
class Notpage extends Component {
    componentDidMount(){
    document.title = "404 NotFound"
  }
  render() {
    return (
      <div className="bg">
        <div className="not">
        </div>
      </div>
    );
  }
}
export default (Notpage);

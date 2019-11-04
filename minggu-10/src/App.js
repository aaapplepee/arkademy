import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
  };

  handleAdd() {
    this.setState({ count: this.state.count + 1});
  }
  handleMin() {
    this.setState({ count: this.state.count - 1});
  }
  handleReset() {
    this.setState({ count: 0});
  }

    render(){
      return(
        <div className="body">
          <p>{this.state.count}</p>
          <button onClick={() => this.handleAdd()}>Tambah</button>
          <button onClick={() => this.handleMin()}>Kurang</button>
          <button onClick={() => this.handleReset()}>Reset</button>
        </div>
      );
    }
}

export default App; 
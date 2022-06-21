import React from "react";
import axios from "axios";
import Card from "./Card";

class App extends React.Component {
  state = {
    fileArray: []
  };

  componentDidMount() {
    axios("https://www.mohfw.gov.in/data/datanew.json").then((data) => {
      console.log(data.data[0]);
      this.setState({ fileArray: data.data });
    });
  }

  render() {
    return (
      <div>
        <Card data={this.state.fileArray} />
      </div>
    );
  }
}

export default App;

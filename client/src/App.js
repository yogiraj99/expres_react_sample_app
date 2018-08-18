import React, {Component} from 'react';
import HttpRequest from "./HttpRequest";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentDidMount() {
    HttpRequest.get('/api/requestData', 'application/json')
        .then((data) => {
          this.setState({data});
        });
  }

  render() {
    return (
        <div className="App">
          <p>this is static page</p>
          {<ol>{this.state.data.map((d) => <li key={d.key}>{d.value}</li>)}</ol>}
        </div>
    );
  }
}

export default App;

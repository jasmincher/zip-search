import React from 'react';
import './App.css';
import axios from 'axios';
import ZipSearch from './ZipSearch';




class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      zipcodes: []
    }
  }

  searchZip = (e) => {
    e.preventDefault();
    let userInput = e.target[0].value;
    console.log(userInput);

    axios.get('http://ctp-zip-api.herokuapp.com/zip/' + userInput)
      .then((resolve) => {
        this.setState({ zipcodes: resolve.data });
        console.log(resolve.data);
      })
      .catch((err) => console.log(err));

  }


  render() {
    let elements = [];
    elements = this.state.zipcodes.map((element, i) => <ZipSearch key={i} {...element} />)
    return (
      <div className="content">
        <form onSubmit={this.searchZip}>
          <h1 className="title">Zip Code Search</h1>
          <p className="search">Zip Search: <input type="text" /></p>
        </form>

        {elements}
      </div>
    );

  }


}


export default App;

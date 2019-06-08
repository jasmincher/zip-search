import React from 'react';
import './App.css';
import axios from 'axios';
import ZipSearch from './ZipSearch';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      zipcodes: [],
      found: false 
    }
  }

  searchZip = (e) => {
    e.preventDefault();
    let userInput = e.target[0].value;
    console.log(userInput);

    axios.get('http://ctp-zip-api.herokuapp.com/zip/' + userInput)
      .then((resolve) => {
        this.setState({ zipcodes: resolve.data, found: true }); 
      })
      .catch((err) => {
        this.setState({ found: false });
           
      });

  


  }


  render() {
    let elements = [];

    if (this.state.found)
      elements = this.state.zipcodes.map((element, i) => <ZipSearch key={i} {...element} />)
    else
      elements = <h2 className="no-results">No results</h2>


    return (
      <div className="content">
        <form onSubmit={this.searchZip}>

          <h1 className="title">Zip Code Search</h1>
          <p className="search">Zip Search: <input type="text" placeholder="Enter Zip Code" /> <button onClick="{this.searchZip}"> Search</button></p>

        </form>

        {elements}
      </div>
    );

  }


}


export default App;

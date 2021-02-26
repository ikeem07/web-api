import React from 'react';
import logo from './logo.svg';
import {Button} from 'antd';
import './App.css';
import axios from 'axios';
import {CountryInfo} from './interfaces'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={() => get()}>Click</Button>
      </header>
    </div>
  );
}

async function get() {
  var result: CountryInfo = await axios.get('https://restcountries.eu/rest/v2/alpha/col')
  .then(function (response) {
    // handle success
    console.log(response.data);
    return response.data as CountryInfo
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    var empty = {} as CountryInfo;
    return empty;
  });

  console.log(result);
}

export default App;

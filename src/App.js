import React from 'react';
import './App.css';
import * as Data from './data';

import ResultFound from './component/resultFound';
import ResultNotFound from './component/resultNotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iphones: [],
      searchterm: '',
      isSearching: false
    };
  }

  doSearch = () => {
    var { searchterm } = this.state;
    const iphone =  Data.getIphones(searchterm)
    iphone.then(response =>  this.setState({
      iphones: response,
      isSearching: true
     }));
  }

  onChange = (e) => {
    this.setState({
        searchterm : e.target.value
    });
  }

  render() {
    const { iphones, searchterm, isSearching } = this.state;
    return (
      <div className="page">
        <div className="header">
          <div className="logo" />
          <h1>ACME Inc</h1>
        </div>
        <div className="content">
          <div className="input-field">
            <input placeholder="search" searchterm={searchterm} onChange={this.onChange}/>
            <button className="btn btn-primary" type="button" onClick={this.doSearch}>Search</button>
          </div>
          {isSearching ? (iphones.length
          ? (
            <div className="result-found">
              <ResultFound iphones={iphones} />
            </div>
          )
          : <div className="result-not-found">
              <ResultNotFound />
            </div>
          )
          : <div className="is-searching">
              <span>Loading...</span>
            </div>
          }
        </div>
        <div className="footer">
          <p className="links">&copy; 2018 Fake Company</p>
          <ul className="footer-links">
            <li className="links"><a href="/privacy">Privacy Policy</a></li>
            <li className="links"><a href="/terms">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

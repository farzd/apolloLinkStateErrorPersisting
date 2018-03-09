import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import './App.css';
import Childz from './Childz'


class App extends Component {
  render() {
    const { data } = this.props;
    return(
      <div className="App">
        <header className="App-header">
        {data.error && data.error.message}
        {data.user && data.user.name}
          <br/>
          <br/>
          <Childz />          
        </header>  
        </div>    
    )
  }  
}


const getUser = gql`
  query getUser{
    user @client{
      name
    }
  }`;


export default graphql(getUser)(App);

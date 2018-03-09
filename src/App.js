import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag';
import './App.css';
import Childz from './Childz'

class App extends Component {
  render() {
    const { data } = this.props;
    
    if(!data.loading) {
      console.log(this.props);
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>{data.pet.toString()}</h1>
          <button onClick={()=> {
            this.props.mutate({ variables: { text: !!data.pet } });
          }}>Toggle</button>
          <br/>
          <br/>
          <Childz />
        </header>
      </div>

    );
  }
}

const mutatePet = gql`
  mutation mutatePet($text: String!) {
    mutatePet(text: $text) @client {
      pet
    }
}`;

const getPet = gql`
  query getPet{
    pet @client
  }`;
  
export default compose(
  graphql(mutatePet),
  graphql(getPet)
)(App);

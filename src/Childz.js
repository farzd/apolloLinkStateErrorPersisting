import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag';

class Childz extends Component {
  render() {
    const { data } = this.props;
    
    if(!data.loading) {
      console.log(this.props);
    }
    
    return (
      <div>
          <h1>{data.pet.toString()}</h1>
          <button onClick={()=> {
            this.props.mutate({ variables: { text: !!data.pet } });
          }}>Toggle</button>
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
)(Childz);
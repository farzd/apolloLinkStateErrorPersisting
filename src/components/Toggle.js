import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

class Toggle extends Component {
  render() {
    return (
      <div>
          <button onClick={()=> {
            this.props.mutate({ variables: { val: !!this.props.checkedin } });
          }}>Toggle</button>
      </div>
    );
  }
}

const mutateCheckIn = gql`
  mutation ($val: String!) {
    mutateCheckIn(val: $val) @client {
      checkedin
    }
}`;

export default graphql(mutateCheckIn)(Toggle);
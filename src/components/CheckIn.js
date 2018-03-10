import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

class CheckIn extends Component {
  render() {
    const { data } = this.props;

    if(data.loading) {
      return(
        <div>loading...</div>
      )
    }
    return(
      <div>CheckIn Component : {data.error && data.error.message}{data.user && data.user.name}</div>
    )
  }  
}

const getUser = gql`
  query getUser{
    user @client{
      name
    }
  }`;

export default graphql(getUser)(CheckIn);

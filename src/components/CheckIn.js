import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

class CheckIn extends Component {
  componentWillUnmount() {
    console.log('un mount');
  }
  
  render() {
    const { data } = this.props;

    if (data.loading) {
      return(
        <div>loading...</div>
      )
    }
    
    if (data.user.name.error) {
      return(
        <div>Error {data.user.name.error}</div>
      )
    }    
    
    return(
      <div>CheckIn Component : {data.user && data.user.name && data.user.name.response}</div>
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

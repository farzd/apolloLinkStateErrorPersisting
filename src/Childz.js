import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

class Childz extends Component {
  render() {
    const { data } = this.props;

    if(data.error) {
      return (data.error.message);
    }
    
    if (data.user) {
      return (data.user.name);
    }

    return <div>empty</div>;

  }
}

const getUser = gql`
  query getUser{
    user @client{
      name
    }
  }`;


export default graphql(getUser)(Childz);

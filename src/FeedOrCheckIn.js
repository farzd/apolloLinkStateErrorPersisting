import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag';
import CheckIn from './components/CheckIn'
import Feed from './components/Feed'
import Toggle from './components/Toggle'

class FeedOrCheckIn extends Component {
  render() {
    const { checkedin } = this.props.data

    return(
      <div className="App">
        <header className="App-header">
          {checkedin ? <Feed/> : <CheckIn />}
          
          <br/><br/><br/>
          
          <Toggle checkedin={checkedin}/>
        </header>  
      </div>          
    )
  }
}


const getCheckIn = gql`
  query {
    checkedin @client
  }`;
  
export default graphql(getCheckIn)(FeedOrCheckIn);

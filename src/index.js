import React from 'react';
import ReactDOM from 'react-dom';
import FeedOrCheckIn from './FeedOrCheckIn';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { defaults, resolvers } from './resolvers'
import './index.css';

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: withClientState({ resolvers, defaults, cache })
});

ReactDOM.render(<ApolloProvider client={client}><FeedOrCheckIn /></ApolloProvider>, document.getElementById('root'));

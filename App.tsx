import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import awsconfig from './aws-exports';
import UserList from './screens/UserList';


const client = new ApolloClient({
  uri: 'http://localhost:9002/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': awsconfig.aws_appsync_apiKey, 
  },
});


function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <UserList />
  </ApolloProvider>
  );
}



export default App;

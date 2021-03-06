import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BatchHttpLink } from '@apollo/client/link/batch-http';

const uri =
  'https://api-eu-central-1.graphcms.com/v2/ckppgw1q5yiqx01w60v702qcj/master';

const batchHttpLink = new BatchHttpLink({ uri, headers: { batch: 'true' } });

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
  batchHttpLink,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

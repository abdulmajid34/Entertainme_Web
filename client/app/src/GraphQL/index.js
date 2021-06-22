import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
              fields: {
                movies: {
                   merge(existing, incoming){
                    return incoming
                  }
                }
              }
            }
        }
    })
});


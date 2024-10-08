import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { addMocksToSchema } from '@graphql-tools/mock';

import { listZellerCustomers } from './queries/listZellerCustomers.js';
import { getZellerCustomer } from './queries/getZellerCustomer.js';

const schema = await loadSchema('schema.gql', {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema,
    resolvers: {
      Query: {
        listZellerCustomers: (_, { filter }) => {
          if (filter?.role?.eq) {
            return {
              items: listZellerCustomers.items.filter(
                (customer) => customer.role === filter.role.eq
              ),
              nextToken: null,
            };
          }
          return listZellerCustomers;
        },
        getZellerCustomer: () => getZellerCustomer,
      },
    },
  }),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 9002 },
});

// eslint-disable-next-line no-console
console.log(
  `🚀 Server is listening at ${url}`
);

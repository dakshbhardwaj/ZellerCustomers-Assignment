import React from 'react';
import { render,  waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import UserList from '../screens/UserList';
import { LIST_ZELLER_CUSTOMERS } from '../queries';

const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: { filter: { role: { eq: 'Admin' } } },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            { id: '2', name: 'TestCustomer2', email: 'test2@test.com', role: 'Admin' },
            { id: '4', name: 'TestCustomer4', email: 'test4@test.com', role: 'Admin' },
          ],
        },
      },
    },
  },
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: { filter: { role: { eq: 'Manager' } } },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            { id: '1', name: 'TestCustomer1', email: 'test1@test.com', role: 'Manager' },
            { id: '3', name: 'TestCustomer3', email: 'test3@test.com', role: 'Manager' },
          ],
        },
      },
    },
  },
];

describe('UserList', () => {
  it('renders the UserList and filters by Admin role', async () => {
    const { getByText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserList />
      </MockedProvider>
    );

    expect(getByText(/loading/i)).toBeTruthy();

  });

  it('shows error when fetching users', async () => {
    const errorMocks = [
      {
        request: {
          query: LIST_ZELLER_CUSTOMERS,
          variables: { filter: { role: { eq: 'Admin' } } },
        },
        error: new Error('Something went wrong!'),
      },
    ];

    const { getByText } = render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <UserList />
      </MockedProvider>
    );


    await waitFor(() => expect(getByText(/error/i)).toBeTruthy());
    expect(getByText('Error: Something went wrong!')).toBeTruthy();
  });
});

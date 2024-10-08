Here's the content converted to .md format:

# Zeller React Native Code Challenge

## Overview

This project is a React Native application built to solve a coding challenge provided by Zeller. The goal of the app is to display and filter a list of users based on their role (Admin or Manager) using a GraphQL endpoint. The application is developed using TypeScript, with a focus on clean and maintainable code, along with a robust testing suite.

## Table of Contents
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Features](#features)
- [Testing](#testing)
- [Future Improvements](#future-improvements)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (>= 14.x)
- React Native CLI
- Xcode or Android Studio (for iOS/Android development)
- Apollo Client and related GraphQL packages
- Jest (for testing)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the GraphQL mock server:**

   Ensure that the GraphQL server is running at `http://localhost:9002/graphql` (the endpoint can be customized in the Apollo Client setup).

4. **Run the app:**

   For iOS:

   ```bash
   npx react-native run-ios
   ```

   For Android:

   ```bash
   npx react-native run-android
   ```

## Technologies Used

- **React Native**: For building the mobile application.
- **TypeScript**: Ensuring type safety throughout the application.
- **Apollo Client**: For managing GraphQL queries.
- **Jest**: For writing unit tests.
- **GraphQL**: For querying the user data from the mock API.

## Project Structure

The project is structured as follows:

```
├── src/
│   ├── components/
│   │   ├── RoleSelector.tsx     # Component for selecting user role filters
│   │   ├── UserCard.tsx         # Component to display individual user details
│   │   ├── LoadingError.tsx     # Component to handle loading and error states
│   │   ├── EmptyState.tsx       # Component for empty list message
│   ├── screens/
│   │   └── UserList.tsx         # Main screen that displays the user list
│   ├── graphql/
│   │   └── queries.ts           # GraphQL queries
│   └── App.tsx                  # Root component that sets up ApolloProvider
├── aws-exports.js               # AWS configuration file for GraphQL endpoint
└── schema.gql                   # GraphQL schema for user data
```

## Features

- **User List with Role Filter**: Displays a list of users fetched from a GraphQL endpoint. The user list can be filtered by role (`Admin` or `Manager`).
- **GraphQL Integration**: The app communicates with the server using Apollo Client to query the `listZellerCustomers` GraphQL API.
- **Loading/Error Handling**: The app gracefully handles loading states and error messages.
- **Empty State**: Displays a friendly message when no users are found.
- **Pull to Refresh**: Users can refresh the user list by pulling down on the screen.

### Components Breakdown

1. **App.tsx**: The root component that integrates Apollo Client and renders the `UserList` component.
2. **UserList.tsx**: The main screen that displays the user list, allowing filtering by role.
3. **RoleSelector.tsx**: A reusable component for selecting between Admin and Manager roles.
4. **UserCard.tsx**: A card component to display each user's name, role, and avatar.
5. **LoadingError.tsx**: A component for handling loading and error states.
6. **EmptyState.tsx**: Displays a message when there are no users to display.

## Testing

The project includes unit tests written with Jest. Tests are written for the main components to ensure functionality like role selection, loading/error handling, and data rendering.

To run tests:

```bash
npm test
```

### Tests included:

- **RoleSelector Component**: Ensures role selection changes the filter.
- **UserCard Component**: Verifies correct rendering of user details.
- **LoadingError Component**: Tests for correct loading and error states.
- **UserList Component**: End-to-end tests for filtering and rendering the user list.

## Future Improvements

- **Add More Filters**: Extend the app to include more user filters (e.g., by location, date joined).
- **Pagination**: Add pagination for the user list to handle larger datasets.
- **Offline Mode**: Implement a feature to cache user data for offline access.

## Running and Testing

1. **Run the Application**:

   Follow the instructions in the [Getting Started](#getting-started) section to run the application locally on iOS or Android.

2. **Running Tests**:

   To run the unit tests, execute the following command in the root of the project:

   ```bash
   npm test
   ```
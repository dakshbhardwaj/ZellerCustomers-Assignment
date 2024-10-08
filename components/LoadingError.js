import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LoadingError = ({ loading, error }) => {
  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error.message}</Text>;
  }

  return null;
};

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#0070BA',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
});

export default LoadingError;

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const EmptyState = () => (
  <Text style={styles.emptyListText}>No users found</Text>
);

const styles = StyleSheet.create({
  emptyListText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#888888',
  },
});

export default EmptyState;

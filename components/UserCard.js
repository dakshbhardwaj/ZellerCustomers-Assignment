import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserCard = ({ user }) => (
  <View style={styles.userCard}>
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{user.name[0]}</Text>
    </View>
    <View>
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userRole}>{user.role}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#E5F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 18,
    color: '#0070BA',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  userRole: {
    fontSize: 14,
    color: '#888888',
  },
});

export default UserCard;

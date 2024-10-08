import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { LIST_ZELLER_CUSTOMERS } from '../queries';
import UserCard from '../components/UserCard';
import RoleSelector from '../components/RoleSelector';
import LoadingError from '../components/LoadingError';
import EmptyState from '../components/EmptyState';


const UserList = () => {
  const [role, setRole] = useState('Admin');

  const { data, loading, error, refetch } = useQuery(LIST_ZELLER_CUSTOMERS, {
    variables: {
      filter: { role: { eq: role } },
    },
  });

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    refetch({ filter: { role: { eq: selectedRole } } });
  };

  if (loading || error) return <LoadingError loading={loading} error={error} />;

  if (!data?.listZellerCustomers?.items || data.listZellerCustomers.items.length === 0) {
    return <EmptyState />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Types</Text>
      <RoleSelector selectedRole={role} onRoleChange={handleRoleChange} />
      <Text style={styles.subtitle}>{role} Users</Text>
      <FlatList
        refreshing={loading}
        ListEmptyComponent={EmptyState}
        onRefresh={() => refetch()}
        data={data.listZellerCustomers.items}
        renderItem={({ item }) => <UserCard user={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  listContentContainer: {
    paddingBottom: 20,
  },
});

export default UserList;

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoleSelector = ({ selectedRole, onRoleChange }) => {
  return (
    <View style={styles.roleSelector}>
      {['Admin', 'Manager'].map((role) => (
        <TouchableOpacity
          key={role}
          style={[styles.roleButton, selectedRole === role && styles.activeRoleButton]}
          onPress={() => onRoleChange(role)}
        >
          <View style={[styles.radioButton, selectedRole === role && styles.activeRadioButton]}>
            {selectedRole === role && <View style={styles.radioButtonInner} />}
          </View>
          <Text style={styles.roleText}>{role}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  roleSelector: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  roleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeRadioButton: {
    borderColor: '#0070BA',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0070BA',
  },
  roleText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default RoleSelector;

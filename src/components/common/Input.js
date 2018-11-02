import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = props => {
  const { label, value, onChangeText } = props;
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 40, width: 100 }}
      />
    </View>
  );
};

export { Input };

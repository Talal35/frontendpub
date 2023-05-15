import React from "react";
import { StyleSheet } from "react-native";
import {Button, View, Text } from 'react-native';

export default function Reviewdetails({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Review Screen</Text>
        <Button
          title="Go to Reviews... again"
          onPress={() => navigation.navigate('Reviewdetails')}
        />
      </View>
    )
  }
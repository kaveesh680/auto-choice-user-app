import React,{ useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Flex, Spacer, Heading, ScrollView} from "native-base";

export default function ClaimScreen() {


  return (
    <View style={styles.mainContainer}>
     <Text> This is claim screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    height:'100%'
  }
});


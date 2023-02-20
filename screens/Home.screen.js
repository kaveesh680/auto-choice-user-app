import React,{ useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Flex, Spacer, Heading, ScrollView} from "native-base";

export default function HomeSCreen() {

  return (
    <View style={styles.mainContainer}>
     <Text> This is Home screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    height:'100%'
  }
});


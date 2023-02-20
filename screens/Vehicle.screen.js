import React,{ useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Flex, Spacer, Heading, ScrollView} from "native-base";

export default function VehileScreen() {

  return (
    <View style={styles.mainContainer}>
     <Text> This is vehicle screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    height:'100%'
  },
  topContainer:{
    backgroundColor: '#154897',
    height:'15%',
    paddingTop:50
  },
  topImage:{
    height:50,
    width:65
  },
  middleContainer:{
    paddingTop:20,
    height:'85%'
  }
});


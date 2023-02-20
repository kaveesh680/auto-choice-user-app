import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Heading, Flex, IconButton, Icon, Button, FormControl, ScrollView, Input, WarningOutlineIcon, Checkbox, Box, TextArea } from "native-base";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import  CustomButton  from '../components/CustomButton'



export default function NewClaimScreen({navigation}) {

    const [location, setLocation] = useState('Fetched Location');
    const [dateTime, setDateTime] = useState('Fetched Date Time');
   
    //validation
    const [invalidLocation, setInvalidLocation] = useState(false);
    const [invalidDateTime, setInvalidDateTime] = useState(false);
   
    const uploadImage =  require('../assets/upload.png');

    const buttonPress = (nav) => navigation.navigate(nav);

    const onSubmit = () =>{
        // console.log('Fuck')
        // console.log(firstName)
        // if (firstName == ''){
        //     setInvalidFirstName(true)
        // }
        // if (lastName == ''){
        //     setInvalidLastName(true)
        // }
        // if (nic == ''){
        //     setInvalidNic(true)
        // } 
        // if (license == ''){
        //     setInvalidLicense(true)
        // } 
        // if (address == ''){
        //     setInvalidLicense(true)
        // } 
        // if (mobile == ''){
        //     setInvalidMobile(true)
        // }
        // if (residence == ''){
        //     setInvalidResidence(true)
        // }
        // else{
        //     console.log('write the service function yo')
        // }   
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setCustomerImg(result.assets[0]);
            console.log(result.assets[0]);
        }
    };


  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Flex direction="row" > 
        <IconButton
            icon={
                <Icon as={Entypo} name="back" color={'white'}/>
            }
            borderRadius="full"
            onPress={()=>navigation.navigate('Home')}
        />
      
        <View style={{ width:'80%' }}>
          <Heading color="white" marginBottom='5' style={{alignSelf:'center'}} marginTop={5}>Report New Claim</Heading>
        </View>
        </Flex>
      </View>

      <View style={styles.middleContainer}>

        <ScrollView>

        
          <View style={{padding:30}}>

            <View style={{marginBottom:20}}>
          
              {/* Location */}
              <FormControl isInvalid={false} marginBottom='1'>
                    <Input
                        placeholder={'Location'}
                        onChangeText={null}
                        borderColor={'#3774CE'}
                        size={'xl'}
                        defaultValue={location}
                        isDisabled={true}
                    />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                      {'Invalid Location'}
                    </FormControl.ErrorMessage>
                </FormControl>

                <Checkbox value={true} accessibilityLabel="Select Different Location" >
                  Select Different Location
                </Checkbox>

              </View>

            {/* Date time */}
              <View>
                <FormControl isInvalid={false} marginBottom='1'>
                      <Input
                          placeholder={'Date Time'}
                          onChangeText={null}
                          borderColor={'#3774CE'}
                          size={'xl'}
                          defaultValue={dateTime}
                          isDisabled={true}
                      />
                      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {'Invalid Date Time'}
                      </FormControl.ErrorMessage>
                  </FormControl>


                  <Checkbox value={true} accessibilityLabel="Select Different Location" >
                    Select Different Date|Time
                  </Checkbox>
              </View>

          </View>
          
          <Box p="1" bg="#154897"></Box>

          <View style={{padding:30}}>
            <CustomButton text='Upload Images of Vehicle Number Plate' image={uploadImage}  buttonPress={()=>buttonPress('New_Claim')}/>
            <Box marginBottom={5} />
            <CustomButton text='Upload Damage Images' image={uploadImage} buttonPress={()=>buttonPress('New_Claim')}/>
          </View>
              
          <Box p="1" bg="#154897"></Box>

          <View style={{padding:30}}>
             <TextArea h={20} placeholder="Description"  bgColor={'white'} borderColor={'#154897'} fontSize={20} />
          </View>

         <View style={{paddingHorizontal:30}}>
          <Button small primary  bgColor={'#3774CE'} onPress={onSubmit}>
              <Text style={styles.buttonText}>REPORT CLAIM</Text>
            </Button>
        </View> 

        </ScrollView>

      </View>
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
    paddingTop:50,
    paddingLeft:20,
    display:'flex'

  },
  middleContainer:{
    height:'85%'
  },
  buttonText:{
    color:'white',
    fontSize:'18'
  }
});


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Heading, Flex, IconButton, Icon, Button, FormControl, ScrollView, Input, WarningOutlineIcon, useToast, Box, TextArea, Select, CheckIcon } from "native-base";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import  CustomButton  from '../components/CustomButton'
import RNDateTimePicker from '@react-native-community/datetimepicker';

import {addClaim, getAllVehicles} from "../services/service";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NewClaimScreen({navigation}) {

    const [location, setLocation] = useState();
    const [dateTime, setDateTime] = useState(new Date());
    const [numberPlateImage, setNumberPlateImage] = useState('');
    const [damageImages, setDamageImages] = useState('');
    const [description, setDescription] = useState();
    const [vehicles,setVehicles] = useState();
    const [selectedVehicle, setSelectedVehicle] = useState();

    const [invalidVehicle, setInvlaidVehicle] = useState(false);

    const toast = useToast();

    const uploadImage =  require('../assets/upload.png');

    const onSubmit = () =>{

        if(damageImages==[] || numberPlateImage=='' || description==''){
            toast.show({
                description: `Missing Fields`
            });
        }

        const data = {
            "location":location,
            "dateTime":dateTime,
            "description":description,
            "vehicleId":selectedVehicle,
            "currentStatus":'pending',
            "numberPlateImage":numberPlateImage.base64,
            // "numberPlateImage":null,
            "images":damageImages.base64
            // "images":null

        }

        NetInfo.addEventListener(state => {
            // setIsConnected(state.isConnected);
            console.log('checkingggggggg');
            if (state.isConnected) {
                addClaim(data);
            } else {
                (async () => {
                    await AsyncStorage.setItem('claimData', JSON.stringify(data));
                })();
            }
        });


        navigation.navigate('Home')
        toast.show({
            description: 'Successfully Reported the claim!'
        })

    }


    // image picker
    const pickImage = async (type,context) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection:type,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });
       
        if (!result.canceled) {
            if(context =='nb_plate'){
                setNumberPlateImage(result.assets[0])
            } else if (context =='damage'){
                setDamageImages(result.assets[0])
            }
        }
    };

    //pick date time
    const setDate = (event, selectedDate) => {
        const currentDate = selectedDate || dateTime;
        const localDate = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000));
        setDateTime(localDate);
    };

    useEffect(() => {
        (async () => {

            getAllVehicles().then((response)=>{
                setVehicles(response?.data?.data)
            })

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            let address = await Location.reverseGeocodeAsync(location.coords)
            setLocation(address[0].street+", "+address[0].city);
        })();
    }, []);


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

                        <FormControl  isInvalid={invalidVehicle} paddingBottom={5}>
                            <Select accessibilityLabel="Select Vehicle" fontSize={18} placeholder="Select Vehicle" value={selectedVehicle} _selectedItem={{
                                bg: "#154897",
                                endIcon: <CheckIcon size={5} />
                            }} mt="1" onValueChange={itemValue => setSelectedVehicle(itemValue)}>
                                {
                                    vehicles?.map((vehicle)=>(
                                        <Select.Item key={vehicle.id} label={vehicle.model + ' '+ vehicle.number} value={vehicle.id} />
                                    ))
                                }
                            </Select>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Select a vehicle
                            </FormControl.ErrorMessage>
                        </FormControl>

                    </View>

                    <Box p="1" bg="#154897"></Box>


                    <View style={{padding:30}}>



                        <View style={{marginBottom:20}}>
          
                            {/* Location */}

                            <Input
                                placeholder={'Location'}
                                onChangeText={null}
                                borderColor={'#3774CE'}
                                size={'xl'}
                                value={location}
                                isDisabled={true}
                            />

                            {/* <Checkbox value={true} accessibilityLabel="Select Different Location" >
                  Select Different Location
                </Checkbox> */}

                        </View>

          
                        <Text> <RNDateTimePicker mode='datetime' value={dateTime}  onChange={setDate}/> </Text>

                    </View>
          
                    <Box p="1" bg="#154897"></Box>

                    <View style={{padding:30}}>
                        <CustomButton text='Upload Images of Vehicle Number Plate' image={uploadImage}  buttonPress={()=>pickImage(false, 'nb_plate')}/>
                        <Box marginBottom={5} />
                        <CustomButton text='Upload Damage Images' image={uploadImage} buttonPress={()=>pickImage(false,'damage')}/>
                    </View>
              
                    <Box p="1" bg="#154897"></Box>

                    <View style={{padding:30}}>
                        <TextArea h={20} placeholder="Description" onChangeText={setDescription} value={description}  bgColor={'white'} borderColor={'#154897'} fontSize={20} />
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


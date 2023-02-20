import React, {useEffect, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {Heading, ScrollView} from "native-base";

import VehicleTile from '../components/VehicleTile'
import {getAllVehicles} from "../services/service";

export default function VehicleScreen() {

    const [vehicles, setVehicles]  = useState(null);

    useEffect(() => {
        getAllVehicles().then((response)=>{
            setVehicles(response.data.data)
        })
    }, [])
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Heading color="white" marginBottom='5' alignSelf={'center'} marginTop={5}>ALL VEHICLES</Heading>
            </View>

            <View style={styles.middleContainer}>

                <ScrollView>
                    <View style={{paddingHorizontal:40, paddingVertical:10}}>

                        <View>
                            {
                                vehicles?.map((vehicle)=>(
                                    <VehicleTile key={vehicle.vehicle_id} chassis_number={vehicle.chassis_number} model={vehicle.model} number ={vehicle.number} image={vehicle?.image?.data} />
                                ))
                            }
                        </View>

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


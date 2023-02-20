import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Spacer, Image} from 'native-base';
// import { decode as atob, encode as btoa } from 'base-64';

const VehicleTile = (props) => {

    const [uri, setUri] = useState('');

    useEffect(() => {
        // console.log(props.image);
        if (props.image) {
            // const buffer = new ArrayBuffer(props.image.length * 4); // create an ArrayBuffer with the same length as the integer array
            // const dataView = new DataView(buffer); // create a DataView for the buffer
            //
            // for (let i = 0; i < props.image.length; i++) {
            //     dataView.setInt32(i * 4, props.image[i], true);
            // }
            // const blob = new Blob([buffer], { type: 'image/jpeg' });
            // const uri = URL.createObjectURL(blob);
            // console.log('dsfs', uri);
        }
    }, [])

    return (
        <TouchableOpacity onPress={props.viewClaim}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                backgroundColor: '#3774CE',
                borderColor: '#3774CE',
                borderRadius: 10,
                paddingLeft: 15,
                marginBottom: 15
            }}>
                <View style={{flexDirection: 'column', alignItems: 'light'}}>
                    <Text style={{
                        marginLeft: 1,
                        fontSize: 15,
                        color: 'white',
                        fontWeight: '600',
                        marginBottom: 3,
                        width: 150
                    }} numberOfLines={1}>
                        #{props.chassis_number}
                    </Text>
                    <Text style={{marginLeft: 1, fontSize: 25, color: 'white', marginBottom: 7}}>
                        {props.model}
                    </Text>
                    <Text style={{marginLeft: 1, fontSize: 15, color: 'white', fontWeight: '600'}}>
                        {props.number}
                    </Text>
                </View>

                <Spacer/>

                <View>
                    {/*<img src={`data:image/jpeg;base64,${data}`}*/}
                    <Image source={{
                        uri: `data:image/png;base64,${props?.image}`
                        // uri: uri
                    }} alt="number-image" size="xl" style={{borderTopRightRadius: 10, borderBottomRightRadius: 10}}/>
                </View>

            </View>
        </TouchableOpacity>
    );
}

export default VehicleTile;
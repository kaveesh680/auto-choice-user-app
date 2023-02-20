import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Spacer, Image } from 'native-base';


const VehicleTile = (props) =>{
    return (
        <TouchableOpacity onPress={props.viewClaim}>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1, backgroundColor:'#3774CE', borderColor:'#3774CE', borderRadius:10, paddingLeft:15, marginBottom:15}}>
                    <View style={{ flexDirection: 'column', alignItems: 'light' }}>
                      <Text style={{ marginLeft: 1, fontSize: 15, color: 'white', fontWeight:'600', marginBottom:3, width:150 }} numberOfLines={1}>
                      #{props.chassis_number}
                      </Text>
                       <Text style={{ marginLeft: 1, fontSize: 25, color: 'white', marginBottom:7 }}>
                        {props.model}
                      </Text>
                      <Text style={{ marginLeft: 1, fontSize: 15, color: 'white', fontWeight:'600' }}>
                        {props.number}
                      </Text>
                  </View>

                  <Spacer />

                  <View>
                        <Image source={{
                            uri: props.image
                        }} alt="number-image" size="xl" style={{borderTopRightRadius:10, borderBottomRightRadius:10}}  />
                  </View>
                  
              </View>
          </TouchableOpacity>
    );
}

export default VehicleTile;
import React from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';
import { Spacer } from "native-base";

const CustomButton = (props) =>{
    return (
        <View>
        <TouchableOpacity onPress={props.buttonPress}>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1, backgroundColor:'white', borderColor:'white', borderRadius:10, paddingHorizontal:40}}>
                   <Image 
                    source={props.image}
                    style={{ width: 35, height: 35, margin:10 }}
                    /> 
                    <Spacer />
                     <Text style={{ marginLeft: 1, fontSize: 20, color: '#154897' }}>
                          {props.text} 
                      </Text>
              </View>
          </TouchableOpacity>

          </View>
    );
}

export default CustomButton;
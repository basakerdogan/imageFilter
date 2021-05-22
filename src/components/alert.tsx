import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

type MyAlertProps = {
  title: string;
  backgroundColor: string;
  description: string;
};

function MyAlert(props: MyAlertProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        width: 300,
        backgroundColor: props.backgroundColor,
        marginBottom: 50,
      }}>
      <Ionicons
        name="checkmark-circle-outline"
        size={30}
        style={{marginLeft: 20}}
      />
      <View style={{flex: 1}}>
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>
      </View>
      <Entypo name="cross" size={30} style={{marginRight: 20}} />
    </View>
  );
}

export default MyAlert;
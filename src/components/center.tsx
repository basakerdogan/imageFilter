import React from 'react';
import {View} from 'react-native';

function Center({children}: any) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      {children}
    </View>
  );
}

export default Center;
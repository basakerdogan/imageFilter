  
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

type CustomButtonProps = {
  style: any;
  activeOpacity?: number;
};

function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      style={{shadowOpacity: 1, shadowRadius: 5, ...props.style}}>
      <Text>Custom Button</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
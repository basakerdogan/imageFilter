import React from 'react';
import {View} from 'react-native';

type CardProps = {
  backgroundColor: string;
  width: number | string;
  height: number | string;
  borderRadius: number;
};

function Card(props: CardProps) {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
      }}></View>
  );
}

export default Card;
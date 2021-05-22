import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import MyAlert from '../components/alert';

const Home = () => {
  const [total, setTotal] = useState<number>(0);
  const [price, setPrice] = useState('');
  const [username, setUsername] = useState<string>('');
  const [basket, setBasket] = useState(['0']);

  useEffect(() => {
    //Alert.alert('Component initilized');
  }, []);

  useEffect(() => {
    let totalValue = 0;
    basket.forEach(item => {
      totalValue += +item;
    });

    setTotal(totalValue);
  }, [basket]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{total}</Text>
      <TextInput
        returnKeyType={'done'}
        style={{borderWidth: 1, borderColor: 'red', width: 200, height: 50}}
        value={price}
        onChangeText={text => setPrice(text)}
        onSubmitEditing={value => {
          setBasket([...basket, value.nativeEvent.text]);
          setPrice('0');
        }}
      />
      <Button title={'Tap'} onPress={() => setTotal(50)} />
      <Button title="Degeri Gor" onPress={() => console.warn(total)} />
    </View>
  );
};

export default Home;
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



  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  
      
    </View>
  );
};

export default Home;
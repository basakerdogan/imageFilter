import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Profile = ({navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Text>Paylaş</Text>,
    });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Profile page</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      <Button
        title={'Basket'}
        onPress={() => navigation.navigate('Basket', {total: 30})}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
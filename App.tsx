// App.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image,Alert } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


function App() {
const [resourcePath,setResourcePath]=useState<any>(null);

 const selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    
    launchImageLibrary({mediaType:'photo'},(response)=> {
      setResourcePath(response.uri);
     
    });
  };

  
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri: resourcePath?resourcePath:null,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri:  resourcePath?resourcePath:null }}
            style={{ width: 200, height: 200 }}
          />
        

          <TouchableOpacity onPress={selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>       
        </View>
      </View>
    );
  
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }

});
export default App;
// App.js

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Alert, ImageBackground } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import {
  Polaroid,
  Grayscale
} from 'react-native-color-matrix-image-filters'
import { onChange } from 'react-native-reanimated';


function App() {

  const [resourcePath, setResourcePath] = useState<any>(null);
  const [LoadingEffect,setLoadingEffect] = useState(false);
  const AppButton = ({onPress, title }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
  const PolaroidImage= () => (
    <Polaroid>
    </Polaroid>
  )
  
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

    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      setResourcePath(response.uri);
      setLoadingEffect(true);

    });
  };


  return (
    <View style={styles.container}>
      <View style={styles.container}>
          {!LoadingEffect ?  <TouchableOpacity onPress={selectFile} style={styles.button} >
          <Text style={styles.buttonText}>Filter one</Text>
          </TouchableOpacity> : <TouchableOpacity onPress={selectFile} style={styles.button}  >
          <Text style={styles.buttonText}>Filter another</Text>
          </TouchableOpacity> }
        <View style={styles.containerForIm} >
          <Polaroid>
             <Image source={{ uri: resourcePath ? resourcePath : null}} 
            style={{ width: 300, height: 300,alignSelf: 'center', position: 'absolute', marginTop:20, borderWidth:0.5,borderColor:'#474747'}}/>
             </Polaroid>  
        </View>
        <View >
        <Image source={require('../imageFilter/reactcourselogo.png')} style={styles.imgBackground} />
       
        </View>

      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    backgroundColor: '#eaeaea'
  },
  containerForIm:{
    width: 340, 
    height: 380,
    marginTop:100,
    backgroundColor:'#eaeaea',
    alignItems:'center',
    elevation:3
  },
  button: {
    width: 180,
    height: 60,
    borderColor:'#8f8f8f',
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    position:'absolute',
    top:30,
    left:'30%',
   
  },
  imgBackground: {
    bottom:80,
    width:400,
    height:200,
    alignSelf:'center',
    left:15   
},
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#474747',
    fontFamily:'monospace'
  }

});
export default App;
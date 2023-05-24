import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { ToastAndroid } from "react-native";
import { Camera } from "expo-camera";
import { BackHandler } from "react-native"
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import * as Location from "expo-location";




// const Stack = createNativeStackNavigator();


function App() {
  // constructor(props)
  // {
  //   super(props);
  //   this.state = {
  //     hasCameraPermission: null,         // przydzielone uprawnienia do używania kamery
  //     type: Camera.Constants.Type.back,  // typ kamery
  //   };
  // }
  // let obj = await MediaLibrary.getAssetsAsync({
  //   first: 100,           // ilość pobranych assetów
  //   mediaType: 'photo'    // typ pobieranych danych, photo jest domyślne
  // })

  // alert(JSON.stringify(obj.assets, null, 4))

  componentDidMount = async () => {
    // Location.requestForegroundPermissionsAsync();
    let { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('brak uprawnień do czytania image-ów z galerii')
    }
    
    // BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

  }

  componentDidMount()

  console.log(Dimensions.get("window").width)
  console.log(Dimensions.get("window").height)

  ToastAndroid.showWithGravity(
    'komunikat',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );
  // let { status } = await MediaLibrary.requestPermissionsAsync();
  // if (status !== 'granted') {
  //   alert('brak uprawnień do czytania image-ów z galerii')
  // }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



// const album = await MediaLibrary.getAlbumAsync("DCIM")
// const photos = await MediaLibrary.getAssetsAsync({
//   album: album,
//   first: 20,
//   mediaType: ['photo']
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
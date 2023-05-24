import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { ToastAndroid } from "react-native";
import { Camera } from "expo-camera";
import { BackHandler } from "react-native"
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania



// const Stack = createNativeStackNavigator();


export default function Camera() {
    constructor(props)
    {
        super(props);
        this.state = {
            hasCameraPermission: null,         // przydzielone uprawnienia do używania kamery
            type: Camera.Constants.Type.back,  // typ kamery
        };
    }
    render()
    {
        const { hasCameraPermission } = this.state; // podstawienie zmiennej ze state
        if (hasCameraPermission == null) {
            return <View />;
        } else if (hasCameraPermission == false) {
            return <Text>brak dostępu do kamery</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={ref => {
                            this.camera = ref; // Uwaga: referencja do kamery używana później
                        }}
                        style={{ flex: 1 }}
                        type={this.state.type}>
                        <View style={{ flex: 1 }}>
                            {/* tutaj wstaw buttony do obsługi kamery */}
                        </View>
                    </Camera>
                </View>
            );
        }
    }

    ;
}


componentDidMount = async () => {
    let { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ hasCameraPermission: status == 'granted' });


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import { Stack } from "expo-router";
import { SafeAreaView, ImageBackground } from "react-native";
import WelcomeScreen from "../components/welcome/WelcomeScreen";
import TimeSettingScreen from "../components/time/TimeSettingScreen";
import VoiceSelectionScreen from "../components/voice/VoiceSelectionScreen";
import Styles from "../constants/Styles";
const Home = () => {
    return (
        <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                />
                <VoiceSelectionScreen />
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Home
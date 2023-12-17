import { Stack } from "expo-router";
import { SafeAreaView, ImageBackground } from "react-native";
import WelcomeScreen from "../components/welcome/WelcomeScreen";
import CallIntroductionScreen from "../components/introduction/CallIntroductionScreen";
import TasksIntroductionScreen from "../components/introduction/TasksIntroductionScreen";
import TimeSettingScreen from "../components/time/TimeSettingScreen";
import VoiceSelectionScreen from "../components/voice/VoiceSelectionScreen";
import RelationshipSelectionScreen from "../components/relationship/RelationshipSelectionScreen";
import FamilyMemberSelectionScreen from "../components/relationship/FamilyMemberSelectionScreen";
import MissionSelectionScreen from "../components/mission/MissionSelectionScreen";
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
                <MissionSelectionScreen />
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Home
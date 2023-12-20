import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, ImageBackground, StatusBar } from "react-native";
import WelcomeScreen from "../components/welcome/WelcomeScreen";
import CallIntroductionScreen from "../components/introduction/CallIntroductionScreen";
import TasksIntroductionScreen from "../components/introduction/TasksIntroductionScreen";
import TimeSettingScreen from "../components/time/TimeSettingScreen";
import VoiceSelectionScreen from "../components/voice/VoiceSelectionScreen";
import RelationshipSelectionScreen from "../components/relationship/RelationshipSelectionScreen";
import FamilyMemberSelectionScreen from "../components/relationship/FamilyMemberSelectionScreen";
import MissionSelectionScreen from "../components/mission/MissionSelectionScreen";
import PermissionAskingScreen from "../components/permission/PermissionAskingScreen";
import HomeScreen from "../components/main/HomeScreen";
import CallScreen from "../components/call/CallScreen";
import Styles from "../constants/Styles";
const Home = () => {
    useEffect(() => {
        StatusBar.setBarStyle('dark-content')
    }, [])
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
                <HomeScreen />
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Home
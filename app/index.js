import { Stack } from "expo-router";
import { useState, useRef, useEffect } from "react";
import { SafeAreaView, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./components/welcome/WelcomeScreen";
import CallIntroductionScreen from "./components/introduction/CallIntroductionScreen";
import TasksIntroductionScreen from "./components/introduction/TasksIntroductionScreen";
import TimeSettingScreen from "./components/time/TimeSettingScreen";
import VoiceSelectionScreen from "./components/voice/VoiceSelectionScreen";
import RelationshipSelectionScreen from "./components/relationship/RelationshipSelectionScreen";
import FamilyMemberSelectionScreen from "./components/relationship/FamilyMemberSelectionScreen";
import MissionSelectionScreen from "./components/mission/MissionSelectionScreen";
import PermissionAskingScreen from "./components/permission/PermissionAskingScreen";
import Styles from "../constants/Styles";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';


// const Stack = createNativeStackNavigator();

    


const Home = () => {
   

    return (
        <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <WelcomeScreen />
                {/* <CallIntroductionScreen /> */}
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Home
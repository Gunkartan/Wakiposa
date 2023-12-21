import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import Styles from "../constants/Styles";
import React from 'react'
import { Link } from 'expo-router'
import TimeSettingScreen from './components/time/TimeSettingScreen'
import TasksIntroductionScreen from './components/introduction/TasksIntroductionScreen';

const Test = () => {
  return (
    <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <TasksIntroductionScreen/>
            </ImageBackground>
        </SafeAreaView>
  )
}

export default Test
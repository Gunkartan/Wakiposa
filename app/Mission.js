import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import Styles from "../constants/Styles";
import React from 'react'
import { Link } from 'expo-router'
import MissionSelectionScreen from './components/mission/MissionSelectionScreen';

const Mission = () => {
  return (
    <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <MissionSelectionScreen/>
            </ImageBackground>
        </SafeAreaView>
  )
}

export default Mission
import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import Styles from '../constants/Styles'
import React from 'react'
import TimeSettingScreen from './components/time/TimeSettingScreen'

const TimeSet = () => {
  return (
    <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <TimeSettingScreen/>
            </ImageBackground>
        </SafeAreaView>
  )
}

export default TimeSet
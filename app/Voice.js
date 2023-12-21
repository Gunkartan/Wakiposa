import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import VoiceSelectionScreen from './components/voice/VoiceSelectionScreen'
import Styles from '../constants/Styles'

const Voice = () => {
  return (
    <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <VoiceSelectionScreen/>
            </ImageBackground>
        </SafeAreaView>
  )
}

export default Voice
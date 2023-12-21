import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Styles from '../constants/Styles'
import RelationshipSelectionScreen from './components/relationship/RelationshipSelectionScreen'

const Relationship = () => {
  return (
    <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <RelationshipSelectionScreen />
            </ImageBackground>
        </SafeAreaView>
  )
}

export default Relationship
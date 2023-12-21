import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import Styles from "../constants/Styles";
import React from 'react'
import { Link } from 'expo-router'
import FamilyMemberSelectionScreen from './components/relationship/FamilyMemberSelectionScreen';

const Family = () => {
  return (
    <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <FamilyMemberSelectionScreen/>
            </ImageBackground>
        </SafeAreaView>
  )
}

export default Family
import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import Styles from "../constants/Styles";
import React from 'react'
import { Link } from 'expo-router'
import PermissionAskingScreen from './components/permission/PermissionAskingScreen';

const NotificationPermission = () => {
  return (
    <SafeAreaView
            style={Styles.Container}
        >
            <ImageBackground
                source={require('../assets/images/SecondBackground.png')}
                style={Styles.ImageBackground}
            >
                <PermissionAskingScreen/>
            </ImageBackground>
        </SafeAreaView>
  )
}

export default NotificationPermission
import { View, Text, Modal, Pressable } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Styles from '../constants/Styles';
import Home from './Home';
import { router } from 'expo-router';

const modal = () => {

    const [modalVisible, setModalVisible] = useState(true);
    
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>Hello World!</Text>
            <Pressable
              style={[Styles.button, Styles.buttonClose]}
              onPress={() => router.push("/Home")}>
              <Text style={Styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default modal
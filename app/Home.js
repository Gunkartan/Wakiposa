import { View, Text, Link, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Styles from '../constants/Styles'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import { router } from 'expo-router'
import * as Notification from 'expo-notifications'

const Home = () => {
    const [SetTest, SetSelectedTest] = useState();
    const [SelectedHour, SetSelectedHour] = useState(0);
    const [SelectedMinute, SetSelectedMinute] = useState(0);
    const [SelectedVoice, SetSelectedVoice] = useState('emp');
    const [SelectedRelationship, SetSelectedRelationship] = useState('emp');
    const [SelectedFamilyMember, SetSelectedFamilyMember] = useState("emp");
    const [SelectedMission, SetSelectedMission] = useState("emp");
    const [modalVisible, setModalVisible] = useState();



    const load = async() => {
        try{
            AsyncStorage.getItem('Hour')
                .then(value => {
                    if(value != null){
                        SetSelectedHour(JSON.parse(value));
                    }
                })

            AsyncStorage.getItem('Minute')
                .then(value => {
                    if(value != null){
                        SetSelectedMinute(JSON.parse(value));
                    }
                })

            AsyncStorage.getItem('voice')
                .then(value => {
                    if(value != null){
                        SetSelectedVoice((value));
                    }
                })
            
            AsyncStorage.getItem('test')
                .then(value => {
                    if(value != null){
                        SetSelectedRelationship(value);
                    }
                })
            
            AsyncStorage.getItem('Family')
                .then(value => {
                    if(value != null){
                    SetSelectedFamilyMember(value);
                    }
                })

            AsyncStorage.getItem('Mission')
                .then(value =>{
                    if(value != null){
                    SetSelectedMission(value);
                    }
                })
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        load();
    }, []);

    var utc = require('dayjs/plugin/utc');
    var timezone = require('dayjs/plugin/timezone');
    dayjs.extend(utc);
    dayjs.extend(timezone);

    // const d2 = dayjs.utc(dayjs()).tz('Asia/Bangkok');
    // const timeZone = dayjs.tz.guess();
    
    const [date, Setdate] = useState(dayjs());
    
    // dayjs.utc(date).tz(timeZone);
    let ye = 1000;

    useEffect(() =>{
        const Interval = setInterval(() => {
            Setdate(dayjs());
        }, ye * 1);

        return () => clearInterval(Interval);
    }, [])

    // const trigger = new Date(Date.now() * 1000);
    // trigger.setMinutes(0);
    // trigger.setSeconds(0);

    // Notification.scheduleNotificationAsync({
    // content: {
    //     title: 'Happy new minute!',
    // },
    // trigger,
    // });

    // removeValue = async () => {
    //     try {
    //       await AsyncStorage.removeItem('Hour')
    //     } catch(e) {
    //       // remove error
    //     }
      
    //     console.log('Done.')
    //   }
    
    // console.log(date.format(""));

    if(date.format("H") == SelectedHour && date.format("m") == SelectedMinute && date.format("s") == '0'){
        router.push("/modal");
        // SelectedHour = 24;
        // ye = 0;
        // Setdate('');
        // setModalVisible(true);
        
    }else{
        // console.log("False");
    }
    
  return (
    <View style={Styles.Home}>
      {/* <Text>{SelectedHour}</Text>
      <Text>{SelectedMinute}</Text>
      <Text>{SelectedVoice}</Text>
      <Text>{SelectedRelationship}</Text>
      <Text>{SelectedFamilyMember}</Text>
      <Text>{SelectedMission}</Text> */}
      <Text>{date.format("dddd MM/DD/YYYY HH:mm:ss A Z")}</Text>
      
      {/* <Text>{dayjs.format("hh:mm:ss")}</Text> */}
      {/* <Link href={'/'}>Go Back</Link> */}
      {/* <Modal
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
      </Modal> */}
      <Pressable
        style={[Styles.button, Styles.buttonOpen]}
        onPress={() => router.push('/modal')}>
        <Text style={Styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  )
}

export default Home
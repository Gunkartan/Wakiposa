import React, { useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors';
import { View, Text, FlatList, TouchableOpacity,StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Colors,Fonts } from '../../constants/Theme';

const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);
  const [isStepDetected, setIsStepDetected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [stepHistory, setStepHistory] = useState([]);
  const allSteps = [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];

  useEffect(() => {
    let subscription;
    let prevCount;
    const handleAcceleration = ({ x, y, z }) => {
      // Calculate the total acceleration
      const acceleration = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

      // Set a threshold based on your specific scenario
      const stepThreshold = 1.2;

      // Check if the acceleration exceeds the threshold
      const isStep = acceleration > stepThreshold;

      // If a step is detected, increment the count
      if (isStep && !isStepDetected) {
        setStepCount((prevCount) => {
          const newCount = prevCount + 1;
          setStepHistory((prevHistory) => [...prevHistory, newCount]);
          return newCount;
        });
        setIsStepDetected(true);
      } else if (!isStep && isStepDetected) {
        // Reset isStepDetected when the acceleration goes below the threshold
        setIsStepDetected(false);
      }
    };

    // Start listening for accelerometer data
    subscription = Accelerometer.addListener(handleAcceleration);

    return () => {
      if (subscription) {
        subscription.remove(); // Remove the listener when the component unmounts
      }
    };
  }, [isStepDetected]);

  useEffect(() => {
    // Show a custom-styled modal when stepCount reaches 15
    if (stepCount === 15) {
      setIsModalVisible(true);
    }
  }, [stepCount]);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={{flex:1}}>
      <FlatList
      style={{
        }}
        data={allSteps}
        renderItem={({ item,index }) => <Text style={styles.normal(index,stepCount)}>{`${item}`}</Text>}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle=
        {{ justifyContent: 'center',
          width:'50%',
          height:'100%',
          alignItems:'center',
          alignSelf:'center',
          top:'2%' }}
        snapToAlignment="center" // Align the current item to the center while scrolling
      />

      <Modal style ={{flex:1}}isVisible={isModalVisible}>
        <View style=
        {{borderRadius:22,
          height:'40%',
          width:'90%',
          alignSelf:'center', 
          backgroundColor:Colors.Blue,
          justifyContent: 'center', 
          alignItems: 'center' }}>
          <Image source={require('../../assets/images/Waki.gif')}></Image>
          <Text style={{fontFamily:Fonts.SemiBold,fontSize:36,color:Colors.Yellow,marginBottom:10}}>Impressive!</Text>
          <TouchableOpacity style={{ margin:15,borderRadius:25,width:'30%',height:'15%',backgroundColor:Colors.Yellow,alignItems:'center',justifyContent:'center',elevation:2}}onPress={closeModal}>
            <Text style={{color:Colors.Black,fontFamily:Fonts.SemiBold,fontSize:18}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default StepCounter;

const styles = StyleSheet.create({
  button:{
    position:"relative",
    backgroundColor:Colors.Yellow,

    top:'60%',
    borderRadius:35,
    color:Colors.Black,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    fontFamily:Fonts.SemiBold,
    elevation:2
},
buttonFont:
{
    color:Colors.Black,
    fontSize:20,
    fontFamily:Fonts.SemiBold
},
normal:(index,stepCount)=>(
  { 
    borderRadius:20,
    justifyContent:'center',
    textAlign:'center',
    width:60,
    backgroundColor:index===15-stepCount?Colors.Blue:Colors.Cream,
    opacity: index===15-stepCount?1:0.5,
    color:index===15-stepCount?Colors.Cream:Colors.White,
    fontFamily:Fonts.SemiBold,
    fontSize:24,
    padding:10,
    left: index % 2 === 0 ? 45 :-35
  }
 )
})


import React,{useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Image,StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import Apploading from 'expo-app-loading'
import { Fonts,Colors } from "../../constants/Theme";
const WalkMission = () =>{


    return(
        
         <View style={styles.missionReadyBackground}>
            <View style={styles.container}>
                <Text style={styles.ace}>
                    Ace this mission
                </Text>
                <View style={styles.circle}>
                   <Text style={styles.inCircleFont}>Walk</Text>
                   <Text style={styles.inCircleFont}><Text style={{fontWeight:"bold",fontSize:60,color:'#FCD364'}}>15</Text> steps</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonFont}>I'm ready</Text>     
                </TouchableOpacity>
            </View>
         </View>
    );
    
}

const styles = StyleSheet.create({
    missionReadyBackground:{
      width: '100%',
      height: '100%',
      backgroundColor:Colors.Blue
    },
    ace:{
        fontSize:35,
        color:Colors.White,
        fontFamily:Fonts.Medium,
        textAlign:'center',
        top:'40%',
    },
    inCircleFont:
    {
        fontSize:35,
        color:Colors.Black,
        fontFamily:Fonts.Medium,
    },
    circle:{
        position:"relative",
        backgroundColor:Colors.White,
        borderRadius:180,
        height:250,
        width:250,
        top: '50%',
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        elevation:2
    },
    button:{
        position:"relative",
        backgroundColor:Colors.Yellow,
        width:'50%',
        height:'14%',
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
    }
    }
  );

export default WalkMission;
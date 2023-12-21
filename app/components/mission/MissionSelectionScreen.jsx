import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Styles from "./MissionSelectionScreenStyle";
import { Link, router, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
const MissionSelectionScreen = () => {
    const [SelectedMission, SetSelectedMission] = useState("Walking")
    const [SelectedRelationship, SetSelectedRelationship] = useState('')

    const TextData = [
        { Id: '1', Text: 'Walking' },
        { Id: '2', Text: 'Math Questions' },
        { Id: '3', Text: 'CAPTCHA' }
    ]

    useEffect(() => {
        load();
    }, []);
    
    const load = async() => {
        try{
            AsyncStorage.getItem('Test')
                .then(value => {
                    if(value != null){
                        SetSelectedRelationship(value);
                    }
                })
        }catch(err){
            console.log(err);
        }
    }

    const saveMission = async() => {
        try{
            await AsyncStorage.setItem('Mission', SelectedMission);
        }catch(error){
            console.log(error);
        }
    }
    const ImageData = [
        { Id: '1', Source: require('../../../assets/images/Walk.png') },
        { Id: '2', Source: require('../../../assets/images/Mathematics.png') },
        { Id: '3', Source: require('../../../assets/images/Captcha.png') },
    ]
    const CombinedData = TextData.map((EachText, Index) => ({
        ...EachText,
        EachImage: ImageData[Index].Source
    }))
    return (
        <View
            style={Styles.Container}
        >
            <View
                style={Styles.ProgressIndicatorContainer}
            >
                <View
                    style={Styles.ActiveProgressIndicator}
                ></View>
                <View
                    style={Styles.ActiveProgressIndicator}
                ></View>
                <View
                    style={Styles.ActiveProgressIndicator}
                ></View>
                <View
                    style={Styles.ActiveProgressIndicator}
                ></View>
            </View>
            <View
                style={Styles.ScreenTitleContainer}
            >
                <Text
                    style={Styles.ScreenTitle}
                >Choose the</Text>
                <Text
                    style={Styles.ScreenTitle}
                >wake-up mission</Text>
                <FlatList
                    style={Styles.MissionSelectionButtonsContainer}
                    data={CombinedData}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={Styles.MissionSelectionButtons(SelectedMission, item.Text)}
                            onPress={() => {
                                SetSelectedMission(item.Text)
                            }}
                        >
                            <Text
                                style={Styles.MissionSelectionTexts(SelectedMission, item.Text)}
                            >{item.Text}</Text>
                            <Image
                                source={item.EachImage}
                            />
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{
                        flex: 1,
                        paddingLeft: 15,
                        rowGap: 31
                    }}
                    keyExtractor={(item) => item.Id}
                />
            </View>
            <View
                style={Styles.NextButtonContainer}
            >
                <TouchableOpacity
                    style={Styles.NextButton} onPress={() => {router.push('/Home'); saveMission();}}
                >
                    <Text
                        style={Styles.NextText}
                    >Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default MissionSelectionScreen
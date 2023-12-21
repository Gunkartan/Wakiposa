import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Picker } from "react-native";
import { router } from 'expo-router';
import Styles from "./RelationshipSelectionScreenStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
const RelationshipSelectionScreen = () => {
    const [NextPath, SetNextPath] = useState('/Mission')
    const [SelectedRelationship, SetSelectedRelationship] = useState('Friend')
    const [SelectedHour, SetSelectedHour] = useState(0)
    const [SelectedMinute, SetSelectedMinute] = useState(0)

    const save = async() => {
        try{
            await AsyncStorage.setItem('test', SelectedRelationship);
        }catch (err) {
            console.log(err);
        }
    }
    const load = async() => { //just a placeholder don't delete
        try{
           let test = await AsyncStorage.getItem('Test');

            if(SelectedRelationship !== null){
                SetSelectedRelationship(SelectedRelationship);
            }
            // jsonTest = await AsyncStorage.getItem("Test");

            // if(SelectedRelationship != null){
            //     SetSelectedRelationship(JSON.parse(jsonTest));
            // }
        }catch(err){
            alert(err);
        }
    }

    const loadTime = async() => {
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
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        load();
        loadTime();
    }, []);
    const TextData = [
        { Id: '1', Text: 'Family', Path: "/Family" },
        { Id: '2', Text: 'Friend', Path: "/Mission" },
        { Id: '3', Text: 'Dating', Path: "/Mission" }
    ]
    const ImageData = [
        { Id: '1', Source: require('../../../assets/images/Family.png') },
        { Id: '2', Source: require('../../../assets/images/Friend.png') },
        { Id: '3', Source: require('../../../assets/images/Dating.png') }
    ]
    const CombinedData = TextData.map((EachText, Index) => ({
        ...EachText,
        EachImage: ImageData[Index].Source
    }))
    let Test;

    const pressHandler = (Text, Path) =>{
        SetSelectedRelationship(Text);
        SetNextPath(Path);
        // console.log(NextPath);
        return Test;
    }
    
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
                    style={Styles.InactiveProgressIndicator}
                ></View>
            </View>
            <View
                style={Styles.ScreenTitleContainer}
            >
                <Text
                    style={Styles.ScreenTitle}
                >In which</Text>
                <Text
                    style={Styles.ScreenTitle}
                >relationship?</Text>
                <FlatList
                    style={Styles.RelationshipSelectionButtonsContainer}
                    data={CombinedData}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={Styles.RelationshipSelectionButtons(SelectedRelationship, item.Text)}
                            onPress={() => pressHandler(item.Text, item.Path)}
                        >
                            <Text
                                style={Styles.RelationshipSelectionTexts(SelectedRelationship, item.Text)}
                            >{item.Text}</Text>
                            <Image
                                source={item.EachImage}
                            />
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{
                        flex: 1,
                        paddingLeft: 15,
                        rowGap: 30
                    }}
                    keyExtractor={(item) => item.Id}
                />
            </View>
            <View
                style={Styles.NextButtonContainer}
            >
                <TouchableOpacity
                    style={Styles.NextButton} 
                    onPress={() => {router.push({
                                       pathname: NextPath ,
                                        params: { test: SelectedRelationship},
                                    });
                                    save();
                                }}
                >
                    <Text
                        style={Styles.NextText}
                    >Next</Text>
                </TouchableOpacity>
                <Text></Text>
            </View>
        </View>
    )
}
export default RelationshipSelectionScreen
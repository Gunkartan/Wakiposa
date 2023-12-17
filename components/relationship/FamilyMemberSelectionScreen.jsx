import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Styles from "./FamilyMemberSelectionScreenStyle";
const FamilyMemberSelectionScreen = () => {
    const [SelectedFamilyMember, SetSelectedFamilyMember] = useState("Grandfather")
    const FirstTextData = [
        { Id: '1', Text: 'Grandfather' },
        { Id: '2', Text: 'Father' },
        { Id: '3', Text: 'Brother' }
    ]
    const FirstImageData = [
        { Id: '1', Source: require('../../assets/images/Grandfather.png') },
        { Id: '2', Source: require('../../assets/images/Father.png') },
        { Id: '3', Source: require('../../assets/images/Brother.png') }
    ]
    const FirstCombinedData = FirstTextData.map((EachText, Index) => ({
        ...EachText,
        EachImage: FirstImageData[Index].Source
    }))
    const SecondTextData = [
        { Id: '1', Text: 'Grandmother' },
        { Id: '2', Text: 'Mother' },
        { Id: '3', Text: 'Sister' }
    ]
    const SecondImageData = [
        { Id: '1', Source: require('../../assets/images/Grandmother.png') },
        { Id: '2', Source: require('../../assets/images/Mother.png') },
        { Id: '3', Source: require('../../assets/images/Sister.png') }
    ]
    const SecondCombinedData = SecondTextData.map((EachText, Index) => ({
        ...EachText,
        EachImage: SecondImageData[Index].Source
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
                    style={Styles.InactiveProgressIndicator}
                ></View>
            </View>
            <View
                style={Styles.ScreenTitleContainer}
            >
                <Text
                    style={Styles.ScreenTitle}
                >Family</Text>
            </View>
            <View
                style={Styles.FamilyMembersContainer}
            >
                <FlatList
                    data={FirstCombinedData}
                    renderItem={({ item }) => (
                        <View
                            style={Styles.FamilyMemberSelectionContainer}
                        >
                            <TouchableOpacity
                                style={Styles.FamilyMemberSelectionButtons(SelectedFamilyMember, item.Text)}
                                onPress={() => {
                                    SetSelectedFamilyMember(item.Text)
                                }}
                            >
                                <Image
                                    source={item.EachImage}
                                />
                            </TouchableOpacity>
                            <Text
                                style={Styles.FamilyMemberSelectionTexts}
                            >{item.Text}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.Id}
                />
                <FlatList
                    data={SecondCombinedData}
                    renderItem={({ item }) => (
                        <View
                            style={Styles.FamilyMemberSelectionContainer}
                        >
                            <TouchableOpacity
                                style={Styles.FamilyMemberSelectionButtons(SelectedFamilyMember, item.Text)}
                                onPress={() => {
                                    SetSelectedFamilyMember(item.Text)
                                }}
                            >
                                <Image
                                    source={item.EachImage}
                                />
                            </TouchableOpacity>
                            <Text
                                style={Styles.FamilyMemberSelectionTexts}
                            >{item.Text}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.Id}
                />
            </View>
            <View
                style={Styles.NextButtonContainer}
            >
                <TouchableOpacity
                    style={Styles.NextButton}
                >
                    <Text
                        style={Styles.NextText}
                    >Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default FamilyMemberSelectionScreen
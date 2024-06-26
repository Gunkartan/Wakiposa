import { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Styles from "./RelationshipSelectionScreenStyle";
const RelationshipSelectionScreen = () => {
    const [SelectedRelationship, SetSelectedRelationship] = useState("Friend")
    const TextData = [
        { Id: '1', Text: 'Family' },
        { Id: '2', Text: 'Friend' },
        { Id: '3', Text: 'Dating' }
    ]
    const ImageData = [
        { Id: '1', Source: require('../../assets/images/Family.png') },
        { Id: '2', Source: require('../../assets/images/Friend.png') },
        { Id: '3', Source: require('../../assets/images/Dating.png') }
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
                            onPress={() => {
                                SetSelectedRelationship(item.Text)
                            }}
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
                >
                    <Text
                        style={Styles.NextText}
                    >Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default RelationshipSelectionScreen
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./VoiceSelectionScreenStyle";
import { FlatList } from "react-native-gesture-handler";
const VoiceSelectionScreen = () => {
    const Voice = ["Girly", "Manly"]
    const [SelectedVoice, SetSelectedVoice] = useState("Girly")
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
                    style={Styles.InactiveProgressIndicator}
                ></View>
                <View
                    style={Styles.InactiveProgressIndicator}
                ></View>
            </View>
            <View
                style={Styles.ScreenTitleContainer}
            >
                <Text
                    style={Styles.FirstScreenTitlePart}
                >Which voice you</Text>
                <View
                    style={Styles.SecondScreenTitlePartContainer}
                >
                    <Text
                        style={Styles.SecondScreenTitlePart}>want </Text>
                    <Text
                        style={Styles.SpecialSecondScreenTitlePart}
                    >Waki </Text>
                    <Text
                        style={Styles.SecondScreenTitlePart}>to be?</Text>
                </View>
            </View>
            <FlatList
                style={Styles.VoiceSelectionButtonsContainer}
                data={Voice}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={Styles.VoiceSelectionButton(SelectedVoice, item)}
                        onPress={() => {
                            SetSelectedVoice(item)
                        }}
                    >
                        <Text
                            style={Styles.VoiceSelectionText(SelectedVoice, item)}
                        >{item}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ columnGap: 16 }}
                keyExtractor={(item) => item}
                horizontal
            />
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
export default VoiceSelectionScreen
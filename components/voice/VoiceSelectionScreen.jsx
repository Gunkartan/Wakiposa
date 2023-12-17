import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Styles from "./VoiceSelectionScreenStyle";
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
                    style={Styles.ScreenTitle}
                >Which voice you</Text>
                <View
                    style={Styles.SecondScreenTitlePartContainer}
                >
                    <Text
                        style={Styles.ScreenTitle}>want </Text>
                    <Text
                        style={Styles.SpecialScreenTitle}
                    >Waki </Text>
                    <Text
                        style={Styles.ScreenTitle}>to be?</Text>
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
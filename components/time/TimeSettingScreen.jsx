import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Styles from "./TimeSettingScreenStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";
const TimeSettingScreen = () => {
    const [SelectedHour, SetSelectedHour] = useState(0)
    const [SelectedMinute, SetSelectedMinute] = useState(0)
    const Hours = [''].concat(Array.from({ length: 24 }, (_, i) => i)).concat(' ').concat('  ')
    const Minutes = [''].concat(Array.from({ length: 60 }, (_, i) => i)).concat(' ').concat('  ')
    const RenderItemForHours = ({ item, index }) => {
        const FormattedNumber = index == 0 || index == 25 || index == 26 ? '' : (item < 10 ? `0${item}` : `${item}`)
        return (
            <View
                style={Styles.TimeItem}
            >
                <Text
                    style={Styles.TimeItemText}
                >{FormattedNumber}</Text>
            </View>
        )
    }
    const RenderItemForMinutes = ({ item, index }) => {
        const FormattedNumber = index == 0 || index == 61 || index == 62 ? '' : (item < 10 ? `0${item}` : `${item}`)
        return (
            <View
                style={Styles.TimeItem}
            >
                <Text
                    style={Styles.TimeItemText}
                >{FormattedNumber}</Text>
            </View>
        )
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
                    style={Styles.InactiveProgressIndicator}
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
                >When would you</Text>
                <Text
                    style={Styles.ScreenTitle}
                >like to wake up?</Text>
            </View>
            <View
                style={Styles.TimeSectionContainer}
            >
                <View
                    style={Styles.SelectedItemIndicator}
                ></View>
                <View
                    style={Styles.TimeWheelContainer}
                >
                    <FlatList
                        data={Hours}
                        renderItem={({ item, index }) => RenderItemForHours({ item, index })}
                        keyExtractor={(item) => item}
                        decelerationRate='fast'
                        showsVerticalScrollIndicator={false}
                        snapToInterval={Styles.TimeItem.height}
                        onMomentumScrollEnd={(Event) => {
                            const YOffset = Event.nativeEvent.contentOffset.y
                            const Index = Math.round(YOffset / Styles.TimeItem.height)
                            SetSelectedHour(Hours[Index + 1])
                        }}
                    />
                    <FlatList
                        data={Minutes}
                        renderItem={({ item, index }) => RenderItemForMinutes({ item, index })}
                        keyExtractor={(item) => item}
                        decelerationRate='fast'
                        showsVerticalScrollIndicator={false}
                        snapToInterval={Styles.TimeItem.height}
                        onMomentumScrollEnd={(Event) => {
                            const YOffset = Event.nativeEvent.contentOffset.y
                            const Index = Math.round(YOffset / Styles.TimeItem.height)
                            SetSelectedMinute(Minutes[Index + 1])
                        }}
                    />
                </View>
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
export default TimeSettingScreen
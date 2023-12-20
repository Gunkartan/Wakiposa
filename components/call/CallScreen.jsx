import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Styles from "./CallScreenStyle";
const CallScreen = () => {
    const [ElapsedTime, SetElapsedTime] = useState(0)
    useEffect(() => {
        const Timer = setInterval(() => {
            SetElapsedTime(PreviousTime => PreviousTime + 1)
        }, 1000)
        return () => clearInterval(Timer)
    }, [])
    const FormatTime = (Seconds) => {
        const Minutes = Math.floor(Seconds / 60)
        const RemainingSeconds = Seconds % 60
        return `${String(Minutes).padStart(2, '0')}:${String(RemainingSeconds).padStart(2, '0')}`
    }
    return (
        <View
            style={Styles.Container}
        >
            <Image
                source={require('../../assets/images/Waki.gif')}
                style={Styles.WakiImage}
            />
            <Text
                style={Styles.InCallWithText}
            >In call with</Text>
            <Text
                style={Styles.RoleText}
            >Grandmother</Text>
            <Text
                style={Styles.CallDuration}
            >{FormatTime(ElapsedTime)}</Text>
            <View
                style={Styles.CallMenuContainer}
            >
                <View
                    style={Styles.WhiteIconContainers}
                >
                    <Ionicons
                        name="volume-medium-outline"
                        size={36}
                    />
                </View>
                <TouchableOpacity
                    style={Styles.WhiteIconContainers}
                >
                    <Ionicons
                        name="pause-outline"
                        size={36}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.RedIconContainer}
                >
                    <Ionicons
                        name="close-outline"
                        size={36}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CallScreen
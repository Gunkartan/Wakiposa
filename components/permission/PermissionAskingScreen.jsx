import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as NotificationSystem from "expo-notifications";
import Styles from "./PermissionAskingScreenStyle";
const PermissionAskingScreen = () => {

    const PermissionAsking = async () => {
        NotificationSystem.requestPermissionsAsync()
    }
    return (
        <View
            style={Styles.Container}
        >
            <View
                style={Styles.ScreenTitleContainer}
            >
                <View>
                    <Text
                        style={Styles.ScreenTitle}
                    >Notification</Text>
                    <Text
                        style={Styles.ScreenTitle}
                    >access</Text>
                </View>
                <Ionicons
                    name="notifications"
                    size={60}
                    style={Styles.BellIcon}
                />
            </View>
            <TouchableOpacity
                style={Styles.AllowButton}
                onPress={PermissionAsking}
            >
                <Text
                    style={Styles.ButtonsText}
                >Allow</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.NotNowButton}
            >
                <Text
                    style={Styles.ButtonsText}
                >Not now</Text>
            </TouchableOpacity>
        </View>
    )
}
export default PermissionAskingScreen
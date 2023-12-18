import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Styles from "./PermissionAskingScreenStyle";
const PermissionAskingScreen = () => {
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
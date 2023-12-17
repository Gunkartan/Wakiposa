import { View, Text, Image } from "react-native";
import Styles from "./CallIntroductionScreenStyle";
const CallIntroductionScreen = () => {
    return (
        <View
            style={Styles.Container}
        >
            <View
                style={Styles.ScreenTitleContainer}
            >
                <View
                    style={Styles.FirstScreenTitlePartContainer}
                >
                    <Text
                        style={Styles.ScreenTitle}
                    >A </Text>
                    <Text
                        style={Styles.SpecialScreenTitle}
                    >Roleplay</Text>
                </View>
                <Text
                    style={Styles.ScreenTitle}
                >wake-up call</Text>
            </View>
        </View>
    )
}
export default CallIntroductionScreen
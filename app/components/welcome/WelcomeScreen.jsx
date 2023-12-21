import { View, Text, TouchableOpacity, Image } from "react-native";
import Styles from "./WelcomeScreenStyle";
import TimeSettingScreen from "../time/TimeSettingScreen";
import { Link, Stack, router, useGlobalSearchParams } from "expo-router";
const WelcomeScreen = () => {
    return (
        <View
            style={Styles.Container}
        >
            <View
                style={Styles.WelcomeTitleContainer}
            >
                <View
                    style={Styles.FirstWelcomeTitleLineContainer}
                >
                    <Text
                        style={Styles.FirstWelcomeTitlePart}
                    >Miss </Text>
                    <Text
                        style={Styles.SecondWelcomeTitlePart}
                    >the time</Text>
                </View>
                <Text
                    style={Styles.ThirdWelcomeTitlePart}
                >to enjoy your morning?</Text>
            </View>
            <View
                style={Styles.BabySunImageContainer}
            >
                <Image
                    source={require('../../../assets/images/BabySun.gif')}
                    style={Styles.BabySunImage}
                />
            </View>
            <View
                style={Styles.GetStartedButtonContainer}
            >
                <TouchableOpacity
                    style={Styles.GetStartedButton} onPress={() => {router.replace('/TimeSet')}}
                >
                    <Text
                        style={Styles.GetStartedText}
                    >Get started</Text>
                </TouchableOpacity>
                {/* <Link style={Styles.GetStartedButton} href='/time/TimeSettingScreen'> Get Started </Link> */}
            </View>
        </View>
    )
}
export default WelcomeScreen
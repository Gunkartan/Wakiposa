import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import Styles from "./TasksIntroductionScreenStyle";
const TasksIntroductionScreen = () => {
    return (
        <View
            style={Styles.Container}
        >
            <View
                style={Styles.ScreenTitleContainer}
            >
                <Text
                    style={Styles.ScreenTitle}
                >Tasks to wake</Text>
                <Text
                    style={Styles.ScreenTitle}
                >you up</Text>
            </View>
            <Image
                source={require('../../../assets/images/Tasks.png')}
                style={Styles.TasksImage}
            />
            <View
                style={Styles.ReadyButtonContainer}
            >
                <TouchableOpacity
                    style={Styles.ReadyButton} onPress={() => router.replace('./TimeSet')}
                >
                    <Text
                        style={Styles.ReadyText}
                    >Ready!</Text>
                </TouchableOpacity>
                {/* <Link href='/'>Go back</Link> */}
            </View>
        </View>
    )
}
export default TasksIntroductionScreen
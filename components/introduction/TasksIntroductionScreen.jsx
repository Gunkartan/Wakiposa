import { View, Text, Image, TouchableOpacity } from "react-native";
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
                source={require('../../assets/images/Tasks.png')}
                style={Styles.TasksImage}
            />
            <View
                style={Styles.ReadyButtonContainer}
            >
                <TouchableOpacity
                    style={Styles.ReadyButton}
                >
                    <Text
                        style={Styles.ReadyText}
                    >Ready!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TasksIntroductionScreen
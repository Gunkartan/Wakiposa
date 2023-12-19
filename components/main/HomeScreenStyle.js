import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../constants/Theme";
const Styles = StyleSheet.create({
    GradientBackground: {
        flex: 1
    },
    Container: {
        alignItems: 'center',
        flex: 1
    },
    SleepTimeLeftContainer: {
        marginTop: '25%'
    },
    SleepTimeLeftText: {
        color: Colors.White,
        fontFamily: Fonts.Medium,
        fontSize: 20
    },
    SleepTimeLeftInnerContainer: {
        alignItems: 'baseline',
        flexDirection: 'row'
    },
    SleepTimeLeftValues: {
        color: Colors.White,
        fontFamily: Fonts.SemiBold,
        fontSize: 50
    },
    SleepTimeLeftUnits: {
        color: Colors.White,
        fontFamily: Fonts.Medium,
        fontSize: 36
    },
    AlarmsList: {
        marginTop: 43
    },
    AlarmContainer: {
        flexDirection: 'row'
    },
    FirstAlarmPart: {
        backgroundColor: Colors.BellIcon,
        borderRadius: 20,
        height: 105,
        marginRight: 9,
        width: 57,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0)',
                shadowOffset: {
                    height: 2,
                    width: 1
                },
                shadowRadius: 4,
                shadowOpacity: 0.25
            }
        })
    },
    FirstAlarmPartGradient: {
        alignItems: 'center',
        borderRadius: 20,
        elevation: 4,
        flex: 1,
        justifyContent: 'space-evenly',
    },
    SecondAlarmPart: {
        borderRadius: 20,
        height: 109,
        overflow: 'hidden',
        width: 261
    },
    SecondAlarmPartBackground: {
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 25
    },
    SecondAlarmPartContentContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    SecondAlarmPartTextsContainer: {
        justifyContent: 'center',
        width: '69%'
    },
    SecondAlarmPartSwitchContainer: {
        justifyContent: 'center'
    },
    RepetitionText: {
        color: Colors.Blue,
        fontFamily: Fonts.SemiBold,
        fontSize: 14
    },
    TimeText: {
        color: Colors.White,
        fontFamily: Fonts.Medium,
        fontSize: 30
    },
    MissionText: {
        fontFamily: Fonts.Regular,
        fontSize: 12
    }
})
export default Styles
import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: Colors.Blue,
        flex: 1
    },
    WelcomeTitleContainer: {
        marginTop: '25%'
    },
    FirstWelcomeTitleLineContainer: {
        alignItems: 'baseline',
        flexDirection: 'row'
    },
    FirstWelcomeTitlePart: {
        color: Colors.Yellow,
        fontFamily: Fonts.Bold,
        fontSize: 35,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            height: 2,
            width: 1
        },
        textShadowRadius: 4
    },
    SecondWelcomeTitlePart: {
        fontFamily: Fonts.Regular,
        fontSize: 23,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            height: 2,
            width: 1
        },
        textShadowRadius: 4
    },
    ThirdWelcomeTitlePart: {
        color: Colors.White,
        fontFamily: Fonts.SemiBold,
        fontSize: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            height: 2,
            width: 1
        },
        textShadowRadius: 4
    },
    BabySunImageContainer: {
        borderRadius: 25,
        marginTop: 100,
        overflow: 'hidden'
    },
    BabySunImage: {
        height: 217,
        width: 297
    },
    GetStartedButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    GetStartedButton: {
        alignItems: 'center',
        backgroundColor: Colors.Yellow,
        borderRadius: 25,
        elevation: 4,
        height: 60,
        justifyContent: 'center',
        marginBottom: 100,
        width: 225,
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
    GetStartedText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 20
    }
})
export default Styles
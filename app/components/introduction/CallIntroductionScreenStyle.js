import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1
    },
    ScreenTitleContainer: {
        marginTop: '25%'
    },
    FirstScreenTitlePartContainer: {
        flexDirection: 'row'
    },
    ScreenTitle: {
        color: Colors.White,
        fontFamily: Fonts.SemiBold,
        fontSize: 35,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            height: 2,
            width: 1
        },
        textShadowRadius: 4
    },
    SpecialScreenTitle: {
        color: Colors.Yellow,
        fontFamily: Fonts.SemiBold,
        fontSize: 35,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            height: 2,
            width: 1
        },
        textShadowRadius: 4
    },
    WakiImage: {
        height: 208,
        width: 243
    },
    InCallWithText: {
        fontFamily: Fonts.Medium,
        fontSize: 20
    },
    RoleText: {
        fontFamily: Fonts.Bold,
        fontSize: 30,
        marginTop: 8
    },
    CallDuration: {
        fontFamily: Fonts.Medium,
        fontSize: 20,
        marginTop: 8
    },
    CallMenuContainer: {
        flexDirection: 'row',
        marginTop: 43
    },
    WhiteIconContainers: {
        alignItems: 'center',
        backgroundColor: Colors.WhiteIconContainer,
        borderRadius: 100,
        height: 80,
        justifyContent: 'center',
        marginHorizontal: 14,
        opacity: 0.85,
        width: 80
    },
    RedIconContainer: {
        alignItems: 'center',
        backgroundColor: Colors.RedIconContainer,
        borderRadius: 100,
        height: 80,
        justifyContent: 'center',
        marginHorizontal: 14,
        opacity: 0.8,
        width: 80
    },
    NextButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    NextButton: {
        alignItems: 'center',
        backgroundColor: Colors.Yellow,
        borderRadius: 25,
        elevation: 4,
        height: 55,
        justifyContent: 'center',
        marginBottom: 100,
        width: 150,
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
    NextText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 20
    }
})
export default Styles
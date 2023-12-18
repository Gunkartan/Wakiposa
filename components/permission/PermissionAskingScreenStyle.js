import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1
    },
    ScreenTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100
    },
    ScreenTitle: {
        color: Colors.White,
        fontFamily: Fonts.SemiBold,
        fontSize: 35,
        marginRight: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            height: 2,
            width: 1
        },
        textShadowRadius: 4
    },
    BellIcon: {
        color: Colors.BellIcon,
        marginTop: 7
    },
    AllowButton: {
        alignItems: 'center',
        backgroundColor: Colors.Yellow,
        borderRadius: 25,
        elevation: 4,
        height: 55,
        justifyContent: 'center',
        marginTop: 100,
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
    NotNowButton: {
        alignItems: 'center',
        backgroundColor: Colors.White,
        borderRadius: 25,
        elevation: 4,
        height: 55,
        justifyContent: 'center',
        marginTop: 37,
        opacity: 0.3,
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
    ButtonsText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 20
    }
})
export default Styles
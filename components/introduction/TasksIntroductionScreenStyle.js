import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1
    },
    ScreenTitleContainer: {
        marginTop: 100
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
    TasksImage: {
        height: 405,
        marginTop: 100,
        width: 279
    },
    ReadyButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    ReadyButton: {
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
    ReadyText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 20
    }
})
export default Styles
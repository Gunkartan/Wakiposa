import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1,
    },
    ProgressIndicatorContainer: {
        flexDirection: 'row',
        marginTop: '15%'
    },
    ActiveProgressIndicator: {
        backgroundColor: Colors.Blue,
        borderRadius: 25,
        height: 8,
        marginHorizontal: 1,
        width: 84
    },
    InactiveProgressIndicator: {
        backgroundColor: Colors.White,
        borderRadius: 25,
        height: 8,
        marginHorizontal: 1,
        width: 84
    },
    ScreenTitleContainer: {
        marginTop: '25%'
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
    TimeSectionContainer: {
        alignItems: 'center'
    },
    SelectedItemIndicator: {
        backgroundColor: Colors.White,
        borderRadius: 15,
        height: 50,
        position: 'absolute',
        opacity: 0.6,
        top: 150,
        width: 283
    },
    TimeWheelContainer: {
        borderColor: Colors.White,
        borderRadius: 20,
        borderWidth: 1,
        flexDirection: 'row',
        height: 180,
        marginTop: 100,
        width: 315
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
    },
    TimeItem: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    TimeItemText: {
        fontFamily: Fonts.Medium,
        fontSize: 30
    },
    ImageBackground: {
        height: '100%'
    }
})
export default Styles
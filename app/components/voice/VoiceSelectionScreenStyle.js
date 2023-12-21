import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1
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
    SecondScreenTitlePartContainer: {
        flexDirection: 'row'
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
    VoiceSelectionButtonsContainer: {
        marginTop: 100
    },
    VoiceSelectionButton: (SelectedVoice, Item) => ({
        alignItems: 'center',
        borderRadius: 20,
        elevation: 4,
        height: 83,
        justifyContent: 'center',
        width: 150,
        backgroundColor: SelectedVoice === Item ? Colors.Blue : Colors.White,
        opacity: SelectedVoice === Item ? 1 : 0.7,
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
    }),
    VoiceSelectionText: (SelectedVoice, Item) => ({
        fontFamily: Fonts.Medium,
        fontSize: 20,
        color: SelectedVoice === Item ? Colors.White : Colors.Black
    }),
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
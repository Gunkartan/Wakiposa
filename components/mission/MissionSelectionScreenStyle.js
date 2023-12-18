import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../constants/Theme";
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
    ScreenTitleContainer: {
        flex: 3,
        paddingRight: 15,
        marginTop: '25%'
    },
    ScreenTitle: {
        color: Colors.White,
        fontFamily: Fonts.SemiBold,
        fontSize: 35,
        paddingLeft: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            height: 2,
            width: 1
        },
        textShadowRadius: 4
    },
    MissionSelectionButtonsContainer: {
        marginTop: 48
    },
    MissionSelectionButtons: (SelectedMission, Item) => ({
        alignItems: 'center',
        alignSelf: 'flex-start',
        borderRadius: 20,
        elevation: 4,
        flexDirection: 'row',
        height: 59,
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: SelectedMission === Item ? Colors.Blue : Colors.White,
        opacity: SelectedMission === Item ? 1 : 0.7,
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
    MissionSelectionTexts: (SelectedMission, Item) => ({
        fontFamily: Fonts.Medium,
        fontSize: 20,
        marginRight: 15,
        color: SelectedMission === Item ? Colors.White : Colors.Black
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
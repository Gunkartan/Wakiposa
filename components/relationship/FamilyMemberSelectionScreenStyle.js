import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1
    },
    ProgressIndicatorContainer: {
        flexDirection: 'row',
        marginTop: 100
    },
    ActiveProgressIndicator: {
        backgroundColor: Colors.Purple,
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
    FamilyMembersContainer: {
        flexDirection: 'row',
        marginTop: 33,
        width: '100%'
    },
    FamilyMemberSelectionContainer: {
        alignItems: 'center',
        marginBottom: 42
    },
    FamilyMemberSelectionButtons: (SelectedFamilyMember, Item) => ({
        alignItems: 'center',
        borderRadius: 100,
        height: 70,
        justifyContent: 'center',
        marginHorizontal: 55,
        width: 70,
        backgroundColor: SelectedFamilyMember === Item ? Colors.Blue : Colors.Cream
    }),
    FamilyMemberSelectionTexts: {
        fontFamily: Fonts.Medium,
        fontSize: 18,
        marginTop: 8
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
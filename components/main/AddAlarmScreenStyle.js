import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    ScreenGradientBackground: {
        flex: 1
    },
    CloseButton: {
        alignItems: 'center',
        backgroundColor: Colors.Yellow,
        borderRadius: 100,
        elevation: 4,
        height: 44,
        justifyContent: 'center',
        marginLeft: 24,
        marginTop: 24,
        width: 44,
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
    TimeContainer: {
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: 15,
        flexDirection: 'row',
        height: 214,
        marginTop: 8,
        opacity: 0.7,
        width: 314
    },
    TimeItemContainer: {
        alignItems: 'center',
        height: 60,
        justifyContent: 'center'
    },
    TimeItem: {
        fontFamily: Fonts.Medium,
        fontSize: 30
    },
    SelectedItemsIndicator: {
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: 15,
        height: 60,
        position: 'absolute',
        top: 136,
        width: 285
    },
    RepetitionContainer: {
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: 15,
        height: 123,
        marginTop: 16,
        width: 316
    },
    RepetitionIndicatorContainer: {
        flexDirection: 'row',
        padding: 15
    },
    RepetitionSelectionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    RepetitionSelectionInnerContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    RepeatText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 18
    },
    RepetitionText: {
        color: Colors.OffSwitchThumb,
        fontFamily: Fonts.Medium,
        fontSize: 13
    },
    Divider: {
        alignSelf: 'center',
        backgroundColor: Colors.OffSwitchTrack,
        height: 1,
        width: 299
    },
    VolumeAdjustmentContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 15
    },
    VolumeSlider: {
        height: 6,
        marginLeft: 15,
        width: 221
    },
    MissionContainer: {
        alignSelf: 'center',
        height: 'auto',
        marginTop: 14,
        width: 315
    },
    MissionText: {
        color: Colors.White,
        fontFamily: Fonts.SemiBold,
        fontSize: 18
    },
    MissionList: {
        alignSelf: 'center',
        marginTop: 3
    },
    MissionSelectionButtons: (SelectedMission, Item) => ({
        alignItems: 'center',
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        width: 95,
        backgroundColor: SelectedMission === Item ? Colors.Yellow : Colors.White
    }),
    MissionSelectionTexts: {
        fontFamily: Fonts.Medium,
        fontSize: 12,
        marginTop: 13,
        textAlign: 'center'
    },
    RoleSelectionButton: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: 15,
        flexDirection: 'row',
        height: 54,
        marginTop: 17,
        padding: 15,
        width: 315
    },
    RoleSelectionContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    RoleIndicator: {
        color: Colors.OffSwitchThumb,
        fontFamily: Fonts.Medium,
        fontSize: 17
    },
    SnoozeText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 18
    },
    SubmitButtonContainer: {
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },
    SubmitButton: {
        alignItems: 'center',
        backgroundColor: Colors.Yellow,
        borderRadius: 25,
        elevation: 4,
        height: 55,
        justifyContent: 'center',
        marginBottom: 60,
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
    SubmitText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 20
    },
    RepetitionModalContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    RepetitionModal: {
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: 25,
        elevation: 4,
        height: 250,
        width: 345,
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
    RepetitionModalContentContainer: {
        padding: 15
    },
    CloseModalButton: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: Colors.Yellow,
        borderRadius: 100,
        height: 29,
        justifyContent: 'center',
        width: 29
    },
    RepeatEveryText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 18
    },
    DayListContainer: {
        alignItems: 'center',
        marginTop: 13
    },
    DaySelectionButton: (Selected) => ({
        alignItems: 'center',
        borderRadius: 100,
        height: 35,
        justifyContent: 'center',
        marginHorizontal: 5,
        width: 35,
        backgroundColor: Selected ? Colors.Blue : Colors.InactiveRepetitionSelectionButtons
    }),
    AcronymicDay: {
        fontFamily: Fonts.Medium,
        fontSize: 16
    },
    DividerInRepetitionModal: {
        alignSelf: 'center',
        backgroundColor: Colors.OffSwitchTrack,
        height: 1,
        marginTop: 13,
        width: 306
    },
    RepetitionSelectionTemplateButtonsContainer: {
        flexDirection: 'row',
        marginTop: 13
    },
    AllButton: {
        alignItems: 'center',
        backgroundColor: Colors.InactiveRepetitionSelectionButtons,
        borderRadius: 25,
        height: 39,
        justifyContent: 'center',
        marginRight: 3,
        width: 52
    },
    AllText: {
        fontFamily: Fonts.Medium,
        fontSize: 16
    },
    WeekdaysButton: {
        alignItems: 'center',
        backgroundColor: Colors.InactiveRepetitionSelectionButtons,
        borderRadius: 25,
        height: 39,
        justifyContent: 'center',
        marginHorizontal: 3,
        width: 116
    },
    SaveButton: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.Yellow,
        borderRadius: 25,
        height: 35,
        justifyContent: 'center',
        marginTop: 13,
        width: 68
    },
    SaveText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 16
    },
    RoleModalContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    RoleModal: {
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: 25,
        elevation: 4,
        height: 450,
        width: 345,
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: {
                    height: 2,
                    width: 1
                },
                shadowRadius: 4,
                shadowOpacity: 0.25
            }
        })
    },
    RoleModalContentContainer: {
        padding: 15
    },
    WhoCallsText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 18
    },
    VoiceText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 16,
        marginTop: 7
    },
    VoiceList: {
        marginTop: 4
    },
    VoiceSelectionButtons: (SelectedVoice, Item) => ({
        alignItems: 'center',
        borderRadius: 25,
        height: 35,
        justifyContent: 'center',
        marginRight: 9,
        width: 95,
        backgroundColor: SelectedVoice === Item ? Colors.Blue : Colors.InactiveRepetitionSelectionButtons
    }),
    VoiceSelectionTexts: {
        fontFamily: Fonts.Medium,
        fontSize: 14
    },
    RelationshipText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 16,
        marginTop: 17
    },
    RelationshipList: {
        marginTop: 4
    },
    RelationshipSelectionButtons: (SelectedRelationship, Item) => ({
        alignItems: 'center',
        borderRadius: 25,
        height: 35,
        justifyContent: 'center',
        marginRight: 9,
        width: 90,
        backgroundColor: SelectedRelationship === Item ? Colors.Blue : Colors.InactiveRepetitionSelectionButtons
    }),
    RelationshipSelectionTexts: {
        fontFamily: Fonts.Medium,
        fontSize: 14
    },
    ChooseYourGuardianText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 16,
        marginTop: 17
    },
    GuardianLists: (SelectedRelationship) => ({
        display: SelectedRelationship === 'Family' ? 'flex' : 'none'
    }),
    GuardianList: {
        marginTop: 4
    },
    FirstGuardianSelectionButtonSet: (SelectedGuardian, Item) => ({
        alignItems: 'center',
        borderRadius: 25,
        height: 35,
        justifyContent: 'center',
        marginRight: 9,
        width: 120,
        backgroundColor: SelectedGuardian === Item ? Colors.Blue : Colors.InactiveRepetitionSelectionButtons
    }),
    SecondGuardianSelectionButtonSet: (SelectedGuardian, Item) => ({
        alignItems: 'center',
        borderRadius: 25,
        height: 35,
        justifyContent: 'center',
        marginRight: 9,
        width: 83,
        backgroundColor: SelectedGuardian === Item ? Colors.Blue : Colors.InactiveRepetitionSelectionButtons
    }),
    GuardianSelectionTexts: {
        fontFamily: Fonts.Medium,
        fontSize: 14
    },
    SnoozeModalContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    SnoozeModal: {
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: 25,
        elevation: 4,
        height: 225,
        width: 345,
        ...Platform.select({
            ios: {
                shadowColor: 'Black',
                shadowOffset: {
                    height: 2,
                    width: 1
                },
                shadowRadius: 4,
                shadowOpacity: 0.25
            }
        })
    },
    SnoozeModalContentContainer: {
        padding: 15
    },
    SnoozeText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 18
    },
    SnoozeList: {
        alignSelf: 'center',
        marginTop: 11
    },
    SnoozeSelectionButtons: (SelectedSnooze, Item) => ({
        alignItems: 'center',
        borderRadius: 25,
        height: 35,
        justifyContent: 'center',
        marginHorizontal: 6,
        width: 88,
        backgroundColor: SelectedSnooze === Item ? Colors.Blue : Colors.InactiveRepetitionSelectionButtons
    }),
    SnoozeSelectionTexts: {
        fontFamily: Fonts.Medium,
        fontSize: 16
    },
    SelectedTimeIndicator: {
        alignSelf: 'center',
        fontFamily: Fonts.SemiBold
    }
})
export default Styles
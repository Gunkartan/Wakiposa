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
        marginTop: 100
    },
    ScreenTitle: {
        color: Colors.White,
        fontFamily: Fonts.SemiBold,
        fontSize: 35
    },
    RelationshipSelectionButtons: (SelectedRelationship, Item) => ({
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        height: 59,
        justifyContent: 'center',
        width: 185,
        backgroundColor: SelectedRelationship === Item ? Colors.Blue : Colors.White,
        opacity: SelectedRelationship === Item ? 1 : 0.7
    }),
    RelationshipSelectionTexts: (SelectedRelationship, Item) => ({
        fontFamily: Fonts.Medium,
        fontSize: 20,
        marginRight: 15,
        color: SelectedRelationship === Item ? Colors.White : Colors.Black
    })
})
export default Styles
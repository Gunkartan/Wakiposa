import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1
    },
    WakiImage: {
        height: 208,
        marginTop: '25%',
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
})
export default Styles
import { Stack } from "expo-router"
import { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
SplashScreen.preventAutoHideAsync()
const Layout = () => {
    const [FontsLoaded] = useFonts({
        BoldFont: require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        MediumFont: require('../assets/fonts/MontserratAlternates-Medium.ttf'),
        RegularFont: require('../assets/fonts/MontserratAlternates-Regular.ttf'),
        SemiBoldFont: require('../assets/fonts/MontserratAlternates-SemiBold.ttf')
    })
    const OnLayoutRootView = useCallback(async () => {

        if (FontsLoaded) {
            await SplashScreen.hideAsync()
        }

    }, [FontsLoaded])

    if (!FontsLoaded) return null

    return <Stack
        OnLayout={OnLayoutRootView}
    />

}
export default Layout
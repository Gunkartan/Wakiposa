import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ImageBackground, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Styles from "./HomeScreenStyle";
import { Colors } from "../../constants/Theme";
const HomeScreen = () => {
    const TargetHour = 8
    const TargetMinute = 0
    const [CurrentHour, SetCurrentHour] = useState(new Date().getHours())
    const [CurrentMinute, SetCurrentMinute] = useState(new Date().getMinutes())
    useEffect(() => {
        const Interval = setInterval(() => {
            SetCurrentHour(new Date().getHours())
            SetCurrentMinute(new Date().getMinutes())
        }, 1000)
        return () => clearInterval(Interval)
    }, [])
    const CalculateRemainingSleepTime = (CurrentHour, CurrentMinute, TargetHour, TargetMinute) => {
        let RemainingHour = TargetHour - CurrentHour
        let RemainingMinute = TargetMinute - CurrentMinute

        if (RemainingHour < 0) {
            RemainingHour = 24 - CurrentHour + TargetHour
        }

        if (RemainingMinute < 0) {
            RemainingHour -= 1
            RemainingMinute += 60
        }

        return {
            Hour: RemainingHour,
            Minute: RemainingMinute
        }
    }
    const RoleData = [
        { Id: 1, Source: require('../../assets/images/Brother.png') },
        { Id: 2, Source: require('../../assets/images/Friend.png') },
        { Id: 3, Source: require('../../assets/images/Dating.png') },
        { Id: 4, Source: require('../../assets/images/Father.png') }
    ]
    const AlarmData = [
        { Id: 1, Hour: 8, Minute: 15, Repeat: ['Sun', 'Mon', 'Tue'] },
        { Id: 2, Hour: 9, Minute: 25, Repeat: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
        { Id: 3, Hour: 10, Minute: 30, Repeat: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
        { Id: 4, Hour: 11, Minute: 50, Repeat: ['Sun', 'Sat'] }
    ]
    const MissionData = [
        { Id: 1, Mission: 'Walking' },
        { Id: 2, Mission: 'Mathematics' },
        { Id: 3, Mission: 'CAPTCHA' },
        { Id: 4, Mission: 'Walking' }
    ]
    const [ActiveState, SetActiveState] = useState([
        { Id: 1, State: false },
        { Id: 2, State: false },
        { Id: 3, State: false },
        { Id: 4, State: false }
    ])
    const CombinedData = RoleData.map((EachRole, Index) => ({
        ...EachRole,
        EachAlarmHour: String(AlarmData[Index].Hour).padStart(2, '0'),
        EachAlarmMinute: String(AlarmData[Index].Minute).padStart(2, '0'),
        EachRepetition: AlarmData[Index].Repeat,
        EachMission: MissionData[Index].Mission,
        EachActiveState: ActiveState[Index].State
    }))
    const HandleRepetition = (SelectedDays) => {
        const DaysInAWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const IsEveryday = DaysInAWeek.every(Item => SelectedDays.includes(Item))
        const IsWeekends = SelectedDays.includes('Sat') && SelectedDays.includes('Sun') && SelectedDays.length === 2
        const IsWeekdays = SelectedDays.includes('Mon') && SelectedDays.includes('Tue') && SelectedDays.includes('Wed') && SelectedDays.includes('Thu') && SelectedDays.includes('Fri') && SelectedDays.length === 5

        if (IsEveryday) {
            return 'Everyday'
        } else if (IsWeekends) {
            return 'Weekends'
        } else if (IsWeekdays) {
            return 'Weekdays'
        } else {
            return SelectedDays.join(', ')
        }
    }
    const ToggleSwitch = (Index) => {
        SetActiveState((PreviousStates) => {
            const NewStates = [...PreviousStates]
            NewStates[Index].State = !NewStates[Index].State
            return NewStates
        })
    }
    const RemainingSleepTime = CombinedData.length > 0 ? CalculateRemainingSleepTime(CurrentHour, CurrentMinute, TargetHour, TargetMinute) : { Hour: '--', Minute: '--' }
    return (
        <LinearGradient
            colors={['#7091F5', '#F4E0D5', '#EDD29C', '#7985C1', '#0B2069']}
            locations={[0.0108, 0.2613, 0.4736, 0.7447, 0.9856]}
            start={{
                x: 0.5,
                y: 0
            }}
            end={{
                x: 0.5,
                y: 1
            }}
            style={Styles.GradientBackground}
        >
            <View
                style={Styles.Container}
            >
                <View
                    style={Styles.SleepTimeLeftContainer}
                >
                    <Text
                        style={Styles.SleepTimeLeftText}
                    >Sleep time left:</Text>
                    <View
                        style={Styles.SleepTimeLeftInnerContainer}
                    >
                        <Text
                            style={Styles.SleepTimeLeftValues}
                        >{RemainingSleepTime.Hour} </Text>
                        <Text
                            style={Styles.SleepTimeLeftUnits}
                        >hr </Text>
                        <Text
                            style={Styles.SleepTimeLeftValues}
                        >{RemainingSleepTime.Minute} </Text>
                        <Text
                            style={Styles.SleepTimeLeftUnits}
                        >min</Text>
                    </View>
                </View>
                <FlatList
                    style={Styles.AlarmsList}
                    data={CombinedData}
                    renderItem={({ item, index }) => (
                        <View
                            style={Styles.AlarmContainer}
                        >
                            <View
                                style={Styles.FirstAlarmPart}
                            >
                                <LinearGradient
                                    colors={item.EachActiveState ? ['#ECC9C0', '#A9C3E4', '#ACC3E2'] : ['#A8A8A8']}
                                    locations={item.EachActiveState ? [0, 0.9999, 1] : [0]}
                                    start={{
                                        x: 0.5,
                                        y: 0
                                    }}
                                    end={{
                                        x: 0.5,
                                        y: 1
                                    }}
                                    style={Styles.FirstAlarmPartGradient}
                                >
                                    <Image
                                        source={item.Source}
                                    />
                                    <Ionicons
                                        name="call"
                                        size={24}
                                    />
                                </LinearGradient>
                            </View>
                            <View
                                style={Styles.SecondAlarmPart}
                            >
                                <ImageBackground
                                    source={item.EachActiveState ? require('../../assets/images/SecondBackground.png') : require('../../assets/images/ThirdBackground.png')}
                                    style={Styles.SecondAlarmPartBackground}
                                >
                                    <View
                                        style={Styles.SecondAlarmPartContentContainer}
                                    >
                                        <View
                                            style={Styles.SecondAlarmPartTextsContainer}
                                        >
                                            <Text
                                                style={Styles.RepetitionText}
                                            >{HandleRepetition(item.EachRepetition)}</Text>
                                            <Text
                                                style={Styles.TimeText}
                                            >{item.EachAlarmHour}:{item.EachAlarmMinute}</Text>
                                            <Text
                                                style={Styles.MissionText}
                                            >Mission: {item.EachActiveState ? item.EachMission : ''}</Text>
                                        </View>
                                        <View
                                            style={Styles.SecondAlarmPartSwitchContainer}
                                        >
                                            <Switch
                                                trackColor={{
                                                    false: Colors.OffSwitchTrack,
                                                    true: Colors.Blue
                                                }}
                                                thumbColor={item.EachActiveState ? Colors.OnSwitchThumb : Colors.OffSwitchThumb}
                                                onValueChange={() => ToggleSwitch(index)}
                                                value={item.EachActiveState}
                                            />
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{
                        padding: 15,
                        rowGap: 15
                    }}
                />
            </View>
        </LinearGradient>
    )
}
export default HomeScreen
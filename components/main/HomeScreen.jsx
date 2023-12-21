import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ImageBackground, Switch, TouchableOpacity, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Styles from "./HomeScreenStyle";
import { Colors } from "../../constants/Theme";
import AddAlarmScreen from "./AddAlarmScreen";
import EditAlarmScreen from "./EditAlarmScreen";
const HomeScreen = () => {
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
    useEffect(() => {
        SetCombinedData((PreviousData) => PreviousData.map((Item) => ({
            ...Item,
            TimeRemaining: CalculateRemainingSleepTime(CurrentHour, CurrentMinute, Item.EachAlarmHourInNumber, Item.EachAlarmMinuteInNumber)
        })))
    }, [CurrentHour, CurrentMinute, CombinedData])
    const [CombinedData, SetCombinedData] = useState([])
    const AddNewAlarm = (NewAlarmData) => {
        SetCombinedData((PreviousData) => {
            const NewData = [...PreviousData, NewAlarmData]
            const UpdatedData = NewData.map((Item) => ({
                ...Item,
                TimeRemaining: CalculateRemainingSleepTime(CurrentHour, CurrentMinute, Item.EachAlarmHourInNumber, Item.EachAlarmMinuteInNumber)
            }))
            return UpdatedData
        })
    }
    const FindClosestActiveAlarm = () => {
        let ClosestAlarm = null
        CombinedData.forEach((item) => {

            if (item.EachActiveState) {

                if (!ClosestAlarm || item.TimeRemaining.Hour < ClosestAlarm.TimeRemaining.Hour) {
                    ClosestAlarm = item
                } else if (item.TimeRemaining.Hour === ClosestAlarm.TimeRemaining.Hour && item.TimeRemaining.Minute < ClosestAlarm.TimeRemaining.Minute) {
                    ClosestAlarm = item
                }

            }

        })
        return ClosestAlarm
    }
    const ClosestActiveAlarm = FindClosestActiveAlarm()
    const SleepHoursLeft = ClosestActiveAlarm ? ClosestActiveAlarm.TimeRemaining.Hour : '--'
    const SleepMinutesLeft = ClosestActiveAlarm ? ClosestActiveAlarm.TimeRemaining.Minute : '--'
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
        SetCombinedData((Previous) => {
            const New = [...Previous]
            New[Index].EachActiveState = !New[Index].EachActiveState
            return New
        })
    }
    const RenderItem = ({ item, index }) => {
        return (
            <View
                style={Styles.AlarmContainer}
            >
                <View
                    style={Styles.FirstAlarmPart}
                >
                    <LinearGradient
                        colors={item.EachActiveState ? ['#ECC9C0', '#A9C3E4', '#ACC3E2'] : ['#A8A8A8', '#A8A8A8']}
                        locations={item.EachActiveState ? [0, 0.9999, 1] : [0, 1]}
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
                            style={{
                                transform: [
                                    { scale: 0.75 }
                                ]
                            }}
                        />
                        <Ionicons
                            name="call"
                            size={24}
                        />
                    </LinearGradient>
                </View>
                <TouchableOpacity
                    style={Styles.SecondAlarmPart}
                    onPress={ToggleEditAlarmScreenModal}
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
                </TouchableOpacity>
            </View>
        )
    }
    const [AddAlarmScreenVisibility, SetAddAlarmScreenVisibility] = useState(false)
    const ToggleAddAlarmScreenModal = () => {
        SetAddAlarmScreenVisibility(!AddAlarmScreenVisibility)
    }
    const [EditAlarmScreenVisibility, SetEditAlarmScreenVisibility] = useState(false)
    const ToggleEditAlarmScreenModal = () => {
        SetEditAlarmScreenVisibility(!EditAlarmScreenVisibility)
    }
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
                        >{SleepHoursLeft} </Text>
                        <Text
                            style={Styles.SleepTimeLeftUnits}
                        >hr </Text>
                        <Text
                            style={Styles.SleepTimeLeftValues}
                        >{SleepMinutesLeft} </Text>
                        <Text
                            style={Styles.SleepTimeLeftUnits}
                        >min</Text>
                    </View>
                </View>
                <FlatList
                    style={Styles.AlarmsList}
                    data={CombinedData}
                    renderItem={RenderItem}
                    contentContainerStyle={{
                        padding: 15,
                        rowGap: 15
                    }}
                />
                <View
                    style={Styles.AddAlarmButtonContainer}
                >
                    <TouchableOpacity
                        style={Styles.AddAlarmButton}
                        onPress={ToggleAddAlarmScreenModal}
                    >
                        <Ionicons
                            name="add"
                            size={60}
                            style={{
                                marginLeft: 6
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={AddAlarmScreenVisibility}
            >
                <AddAlarmScreen
                    ModalClosingFunction={ToggleAddAlarmScreenModal}
                    AlarmAddingFunction={AddNewAlarm}
                    RemainingSleepTimeCalculationFunction={CalculateRemainingSleepTime}
                />
            </Modal>
            <Modal
                animationType='slide'
                transparent={true}
                visible={EditAlarmScreenVisibility}
            >
                <EditAlarmScreen
                    ModalClosingFunction={ToggleEditAlarmScreenModal}
                />
            </Modal>
        </LinearGradient>
    )
}
export default HomeScreen
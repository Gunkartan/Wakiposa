import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import Styles from "./EditAlarmScreenStyle";
import { Colors } from "../../constants/Theme";
const EditAlarmScreen = ({ ModalClosingFunction, AlarmData, EditAlarmData, AlarmIndex }) => {
    const [CurrentHour, SetCurrentHour] = useState(new Date().getHours())
    const [CurrentMinute, SetCurrentMinute] = useState(new Date().getMinutes())
    useEffect(() => {
        const Interval = setInterval(() => {
            SetCurrentHour(new Date().getHours())
            SetCurrentMinute(new Date().getMinutes())
        }, 1000)
        return () => clearInterval(Interval)
    }, [])
    const [NewAlarmData, SetNewAlarmData] = useState({
        Voice: 'Manly',
        Role: 'Family, grandfather',
        Source: require('../../assets/images/Grandfather.png'),
        EachAlarmHour: String(0).padStart(2, '0'),
        EachAlarmMinute: String(0).padStart(2, '0'),
        EachAlarmHourInNumber: 0,
        EachAlarmMinuteInNumber: 0,
        EachRepetition: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        EachMission: 'Walking',
        Snooze: 10,
        EachActiveState: false
    })
    const [Sound, SetSound] = useState()
    const [Volume, SetVolume] = useState(0.4)
    const PlaySound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/audio/VolumeTest.wav')
        )
        SetSound(sound)
        await sound.setVolumeAsync(Volume)
        await sound.playAsync()
    }
    const HandleVolumeChange = (Value) => {
        SetVolume(Value)

        if (Sound) {
            Sound.setVolumeAsync(Value)
        }

    }
    const [SelectedHour, SetSelectedHour] = useState(0)
    const [SelectedMinute, SetSelectedMinute] = useState(0)
    const Hours = [''].concat(Array.from({ length: 24 }, (_, i) => i)).concat(' ').concat('  ')
    const Minutes = [''].concat(Array.from({ length: 60 }, (_, i) => i)).concat(' ').concat('  ')
    const RenderItemForHours = ({ item, index }) => {
        const FormattedNumber = index == 0 || index == 25 || index == 26 ? '' : (item < 10 ? `0${item}` : `${item}`)
        return (
            <View
                style={Styles.TimeItemContainer}
            >
                <Text
                    style={Styles.TimeItem}
                >{FormattedNumber}</Text>
            </View>
        )
    }
    const RenderItemForMinutes = ({ item, index }) => {
        const FormattedNumber = index == 0 || index == 61 || index == 62 ? '' : (item < 10 ? `0${item}` : `${item}`)
        return (
            <View
                style={Styles.TimeItemContainer}
            >
                <Text
                    style={Styles.TimeItem}
                >{FormattedNumber}</Text>
            </View>
        )
    }
    const [SelectedMission, SetSelectedMission] = useState('Walking')
    const MissionNames = [
        { Id: 1, Name: 'Walking' },
        { Id: 2, Name: 'Math Questions' },
        { Id: 3, Name: 'CAPTCHA' }
    ]
    const MissionImages = [
        { Id: 1, Image: require('../../assets/images/Walk.png') },
        { Id: 2, Image: require('../../assets/images/Mathematics.png') },
        { Id: 3, Image: require('../../assets/images/Captcha.png') }
    ]
    const CombinedDataForMission = MissionNames.map((EachMission, Index) => ({
        ...EachMission,
        EachImage: MissionImages[Index].Image
    }))
    const HandleMissionSelection = (Item) => {
        SetSelectedMission(Item)
        SetNewAlarmData(PreviousData => ({ ...PreviousData, EachMission: Item }))
    }
    const RenderItemForMissions = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.MissionSelectionButtons(SelectedMission, item.Name)}
                onPress={() => HandleMissionSelection(item.Name)}
            >
                <Image
                    source={item.EachImage}
                />
                <Text
                    style={Styles.MissionSelectionTexts}
                >{item.Name}</Text>
            </TouchableOpacity>
        )
    }
    const [RepetitionModalVisibility, SetRepetitionModalVisibility] = useState(false)
    const ToggleRepetitionModal = () => {
        SetRepetitionModalVisibility(!RepetitionModalVisibility)
    }
    const [SelectedDays, SetSelectedDays] = useState([
        { Id: 1, Selected: false, Day: 'S', Name: 'Sun' },
        { Id: 2, Selected: false, Day: 'M', Name: 'Mon' },
        { Id: 3, Selected: false, Day: 'T', Name: 'Tue' },
        { Id: 4, Selected: false, Day: 'W', Name: 'Wed' },
        { Id: 5, Selected: false, Day: 'T', Name: 'Thu' },
        { Id: 6, Selected: false, Day: 'F', Name: 'Fri' },
        { Id: 7, Selected: false, Day: 'S', Name: 'Sat' },
    ])
    const ToggleSelectedDay = (DayId) => {
        const UpdatedSelectedDay = SelectedDays.map((Day) => Day.Id === DayId ? { ...Day, Selected: !Day.Selected } : Day)
        SetSelectedDays(UpdatedSelectedDay)
        const NewRepetitionArray = UpdatedSelectedDay.filter((Day) => Day.Selected).map((Day) => Day.Name)
        SetNewAlarmData(PreviousData => ({ ...PreviousData, EachRepetition: NewRepetitionArray }))
    }
    const HandleRepetitionForDisplay = (SelectedDays) => {
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
    const DisplayRepetition = HandleRepetitionForDisplay(NewAlarmData.EachRepetition)
    const SelectAllDays = () => {
        const UpdatedSelectedDays = SelectedDays.map((Day) => ({
            ...Day,
            Selected: true
        }))
        SetSelectedDays(UpdatedSelectedDays)
        const NewRepetitionArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        SetNewAlarmData(PreviousData => ({ ...PreviousData, EachRepetition: NewRepetitionArray }))
    }
    const SelectWeekdays = () => {
        const UpdatedSelectedDays = SelectedDays.map((Day) => ({
            ...Day,
            Selected: Day.Id >= 2 && Day.Id <= 6
        }))
        SetSelectedDays(UpdatedSelectedDays)
        const NewRepetitionArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        SetNewAlarmData(PreviousData => ({ ...PreviousData, EachRepetition: NewRepetitionArray }))
    }
    const SelectWeekends = () => {
        const UpdatedSelectedDays = SelectedDays.map((Day) => ({
            ...Day,
            Selected: Day.Id == 1 || Day.Id == 7
        }))
        SetSelectedDays(UpdatedSelectedDays)
        const NewRepetitionArray = ['Sun', 'Sat']
        SetNewAlarmData(PreviousData => ({ ...PreviousData, EachRepetition: NewRepetitionArray }))
    }
    const RenderItemForAcronymicDays = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.DaySelectionButton(item.Selected)}
                onPress={() => ToggleSelectedDay(item.Id)}
            >
                <Text
                    style={Styles.AcronymicDay}
                >{item.Day}</Text>
            </TouchableOpacity>
        )
    }
    const [RoleModalVisibility, SetRoleModalVisibility] = useState(false)
    const ToggleRoleModal = () => {
        SetRoleModalVisibility(!RoleModalVisibility)
    }
    const [SelectedVoice, SetSelectedVoice] = useState('Manly')
    const Voices = [
        { Id: 1, Type: 'Manly' },
        { Id: 2, Type: 'Girly' }
    ]
    const HandleVoiceSelection = (Item) => {
        SetSelectedVoice(Item)
        SetNewAlarmData(PreviousData => ({ ...PreviousData, Voice: Item }))
    }
    const RenderItemForVoiceSelection = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.VoiceSelectionButtons(SelectedVoice, item.Type)}
                onPress={() => HandleVoiceSelection(item.Type)}
            >
                <Text
                    style={Styles.VoiceSelectionTexts}
                >{item.Type}</Text>
            </TouchableOpacity>
        )
    }
    const [SelectedRelationship, SetSelectedRelationship] = useState('Family')
    const Relationships = [
        { Id: 1, Type: 'Family' },
        { Id: 2, Type: 'Friend' },
        { Id: 3, Type: 'Dating' }
    ]
    const HandleRelationshipSelection = (Item) => {
        SetSelectedRelationship(Item)
        const SelectedRelationshipImage = FindImageSourceForRelationship(Item)
        SetNewAlarmData(PreviousData => ({ ...PreviousData, Role: Item, Source: SelectedRelationshipImage }))
    }
    const HandleGuardianSelection = (Item, Type) => {
        SetSelectedGuardian(Item)
        const SelectedGuardianImage = FindImageSourceForRelationship(Item)
        SetNewAlarmData(PreviousData => ({ ...PreviousData, Role: Type, Source: SelectedGuardianImage }))
    }
    const DisplayRelationship = NewAlarmData.Role
    const FindImageSourceForRelationship = (Item) => {
        switch (Item) {
            case 'Grandfather':
                return require('../../assets/images/Grandfather.png')
            case 'Grandmother':
                return require('../../assets/images/Grandmother.png')
            case 'Father':
                return require('../../assets/images/Father.png')
            case 'Mother':
                return require('../../assets/images/Mother.png')
            case 'Brother':
                return require('../../assets/images/Brother.png')
            case 'Sister':
                return require('../../assets/images/Sister.png')
            case 'Friend':
                return require('../../assets/images/Friend.png')
            case 'Dating':
                return require('../../assets/images/Dating.png')
            default:
                return require('../../assets/images/Grandfather.png')
        }
    }
    const RenderItemForRelationshipSelection = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.RelationshipSelectionButtons(SelectedRelationship, item.Type)}
                onPress={() => HandleRelationshipSelection(item.Type)}
            >
                <Text
                    style={Styles.RelationshipSelectionTexts}
                >{item.Type}</Text>
            </TouchableOpacity>
        )
    }
    const [SelectedGuardian, SetSelectedGuardian] = useState('Grandfather')
    const FirstGuardianSet = [
        { Id: 1, Member: 'Grandfather', Type: 'Family, grandfather' },
        { Id: 2, Member: 'Grandmother', Type: 'Family, grandmother' }
    ]
    const SecondGuardianSet = [
        { Id: 1, Member: 'Father', Type: 'Family, father' },
        { Id: 2, Member: 'Mother', Type: 'Family, mother' }
    ]
    const ThirdGuardianSet = [
        { Id: 1, Member: 'Brother', Type: 'Family, brother' },
        { Id: 2, Member: 'Sister', Type: 'Family, sister' }
    ]
    const RenderItemForFirstGuardianSet = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.FirstGuardianSelectionButtonSet(SelectedGuardian, item.Member)}
                onPress={() => HandleGuardianSelection(item.Member, item.Type)}
            >
                <Text
                    style={Styles.GuardianSelectionTexts}
                >{item.Member}</Text>
            </TouchableOpacity>
        )
    }
    const RenderItemForSecondGuardianSet = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.SecondGuardianSelectionButtonSet(SelectedGuardian, item.Member)}
                onPress={() => HandleGuardianSelection(item.Member, item.Type)}
            >
                <Text
                    style={Styles.GuardianSelectionTexts}
                >{item.Member}</Text>
            </TouchableOpacity>
        )
    }
    const RenderItemForThirdGuardianSet = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.SecondGuardianSelectionButtonSet(SelectedGuardian, item.Member)}
                onPress={() => HandleGuardianSelection(item.Member, item.Type)}
            >
                <Text
                    style={Styles.GuardianSelectionTexts}
                >{item.Member}</Text>
            </TouchableOpacity>
        )
    }
    const [SnoozeModalVisibility, SetSnoozeModalVisibility] = useState(false)
    const ToggleSnoozeModal = () => {
        SetSnoozeModalVisibility(!SnoozeModalVisibility)
    }
    const [SelectedSnooze, SetSelectedSnooze] = useState(10)
    const FirstSnoozeSet = [
        { Id: 1, Time: 3 },
        { Id: 2, Time: 5 },
        { Id: 3, Time: 10 }
    ]
    const SecondSnoozeSet = [
        { Id: 1, Time: 15 },
        { Id: 2, Time: 20 },
        { Id: 3, Time: 30 }
    ]
    const HandleSnoozeSelection = (Item) => {
        SetSelectedSnooze(Item)
        SetNewAlarmData(PreviousData => ({ ...PreviousData, Snooze: Item }))
    }
    const DisplaySnooze = NewAlarmData.Snooze
    const RenderItemForFirstSnoozeSet = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.SnoozeSelectionButtons(SelectedSnooze, item.Time)}
                onPress={() => HandleSnoozeSelection(item.Time)}
            >
                <Text
                    style={Styles.SnoozeSelectionTexts}
                >{item.Time} min</Text>
            </TouchableOpacity>
        )
    }
    const RenderItemForSecondSnoozeSet = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.SnoozeSelectionButtons(SelectedSnooze, item.Time)}
                onPress={() => HandleSnoozeSelection(item.Time)}
            >
                <Text
                    style={Styles.SnoozeSelectionTexts}
                >{item.Time} min</Text>
            </TouchableOpacity>
        )
    }
    const HandleHourSelection = (Item) => {
        SetNewAlarmData(PreviousData => ({ ...PreviousData, EachAlarmHour: String(Item).padStart(2, '0'), EachAlarmHourInNumber: Item }))
    }
    const HandleMinuteSelection = (Item) => {
        SetNewAlarmData(PreviousData => ({ ...PreviousData, EachAlarmMinute: String(Item).padStart(2, '0'), EachAlarmMinuteInNumber: Item }))
    }
    return (
        <View
            style={Styles.Container}
        >
            <LinearGradient
                colors={['#FFF2D8', '#6D7FF3']}
                locations={[0, 0.9997]}
                start={{
                    x: 0.5,
                    y: 0
                }}
                end={{
                    x: 0.5,
                    y: 1
                }}
                style={Styles.ScreenGradientBackground}
            >
                <TouchableOpacity
                    style={Styles.CloseButton}
                    onPress={() => {
                        ModalClosingFunction()
                    }}
                >
                    <Ionicons
                        name="close"
                        size={16}
                    />
                </TouchableOpacity>
                <View
                    style={Styles.SelectedItemsIndicator}
                ></View>
                <View
                    style={Styles.TimeContainer}
                >
                    <FlatList
                        data={Hours}
                        renderItem={({ item, index }) => RenderItemForHours({ item, index })}
                        keyExtractor={(item) => item}
                        decelerationRate='fast'
                        showsVerticalScrollIndicator={false}
                        snapToInterval={Styles.TimeItemContainer.height}
                        onScroll={(Event) => {
                            const YOffset = Event.nativeEvent.contentOffset.y
                            const Index = Math.round(YOffset / 60)
                            SetSelectedHour(Hours[Index + 1])
                            HandleHourSelection(SelectedHour)
                        }}
                    />
                    <FlatList
                        data={Minutes}
                        renderItem={({ item, index }) => RenderItemForMinutes({ item, index })}
                        keyExtractor={(item) => item}
                        decelerationRate='fast'
                        showsVerticalScrollIndicator={false}
                        snapToInterval={Styles.TimeItemContainer.height}
                        onScroll={(Event) => {
                            const YOffset = Event.nativeEvent.contentOffset.y
                            const Index = Math.round(YOffset / 60)
                            SetSelectedMinute(Minutes[Index + 1])
                            HandleMinuteSelection(SelectedMinute)
                        }}
                    />
                </View>
                <Text
                    style={Styles.SelectedTimeIndicator}
                >{SelectedHour}:{SelectedMinute}</Text>
                <View
                    style={Styles.RepetitionContainer}
                >
                    <TouchableOpacity
                        style={Styles.RepetitionIndicatorContainer}
                        onPress={ToggleRepetitionModal}
                    >
                        <Text
                            style={Styles.RepeatText}
                        >Repeat</Text>
                        <View
                            style={Styles.RepetitionSelectionContainer}
                        >
                            <View
                                style={Styles.RepetitionSelectionInnerContainer}
                            >
                                <Text
                                    style={Styles.RepetitionText}
                                >{DisplayRepetition}</Text>
                                <Ionicons
                                    name="chevron-forward"
                                    size={21}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={Styles.Divider}
                    ></View>
                    <View
                        style={Styles.VolumeAdjustmentContainer}
                    >
                        <TouchableOpacity
                            onPress={PlaySound}
                        >
                            <Ionicons
                                name="play"
                                size={30}
                                color={Colors.Blue}
                            />
                        </TouchableOpacity>
                        <Slider
                            style={Styles.VolumeSlider}
                            value={Volume}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor={Colors.Black}
                            maximumTrackTintColor={Colors.OffSwitchTrack}
                            step={0.1}
                            onValueChange={HandleVolumeChange}
                        />
                    </View>
                </View>
                <View
                    style={Styles.MissionContainer}
                >
                    <Text
                        style={Styles.MissionText}
                    >Mission</Text>
                </View>
                <View>
                    <FlatList
                        style={Styles.MissionList}
                        data={CombinedDataForMission}
                        renderItem={({ item }) => RenderItemForMissions({ item })}
                        keyExtractor={(item) => item.Id}
                        contentContainerStyle={{
                            columnGap: 15
                        }}
                        horizontal
                    />
                </View>
                <TouchableOpacity
                    style={Styles.RoleSelectionButton}
                    onPress={ToggleRoleModal}
                >
                    <Ionicons
                        name="call"
                        size={25}
                    />
                    <View
                        style={Styles.RoleSelectionContainer}
                    >
                        <Text
                            style={Styles.RoleIndicator}
                        >{DisplayRelationship}</Text>
                        <Ionicons
                            name="chevron-forward"
                            size={21}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.RoleSelectionButton}
                    onPress={ToggleSnoozeModal}
                >
                    <Text
                        style={Styles.SnoozeText}
                    >Snooze</Text>
                    <View
                        style={Styles.RoleSelectionContainer}
                    >
                        <Text
                            style={Styles.RoleIndicator}
                        >{DisplaySnooze} min</Text>
                        <Ionicons
                            name="chevron-forward"
                            size={21}
                        />
                    </View>
                </TouchableOpacity>
                <View
                    style={Styles.SubmitButtonContainer}
                >
                    <TouchableOpacity
                        style={Styles.SubmitButton}
                    >
                        <Text
                            style={Styles.SubmitText}
                        >Okay</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={RepetitionModalVisibility}
                >
                    <View
                        style={Styles.RepetitionModalContainer}
                    >
                        <View
                            style={Styles.RepetitionModal}
                        >
                            <View
                                style={Styles.RepetitionModalContentContainer}
                            >
                                <TouchableOpacity
                                    style={Styles.CloseModalButton}
                                    onPress={ToggleRepetitionModal}
                                >
                                    <Ionicons
                                        name="close"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={Styles.RepeatEveryText}
                                >Repeat every</Text>
                                <View
                                    style={Styles.DayListContainer}
                                >
                                    <FlatList
                                        data={SelectedDays}
                                        renderItem={({ item }) => RenderItemForAcronymicDays({ item })}
                                        keyExtractor={(item) => item.Id}
                                        horizontal
                                    />
                                </View>
                                <View
                                    style={Styles.DividerInRepetitionModal}
                                ></View>
                                <View
                                    style={Styles.RepetitionSelectionTemplateButtonsContainer}
                                >
                                    <TouchableOpacity
                                        style={Styles.AllButton}
                                        onPress={SelectAllDays}
                                    >
                                        <Text
                                            style={Styles.AllText}
                                        >All</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={Styles.WeekdaysButton}
                                        onPress={SelectWeekdays}
                                    >
                                        <Text
                                            style={Styles.AllText}
                                        >Weekdays</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={Styles.WeekdaysButton}
                                        onPress={SelectWeekends}
                                    >
                                        <Text
                                            style={Styles.AllText}
                                        >Weekends</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    style={Styles.SaveButton}
                                    onPress={ToggleRepetitionModal}
                                >
                                    <Text
                                        style={Styles.SaveText}
                                    >Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={RoleModalVisibility}
                >
                    <View
                        style={Styles.RoleModalContainer}
                    >
                        <View
                            style={Styles.RoleModal}
                        >
                            <View
                                style={Styles.RoleModalContentContainer}
                            >
                                <TouchableOpacity
                                    style={Styles.CloseModalButton}
                                    onPress={ToggleRoleModal}
                                >
                                    <Ionicons
                                        name="close"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={Styles.WhoCallsText}
                                >Who calls</Text>
                                <Text
                                    style={Styles.VoiceText}
                                >Voice</Text>
                                <View>
                                    <FlatList
                                        style={Styles.VoiceList}
                                        data={Voices}
                                        renderItem={({ item }) => RenderItemForVoiceSelection({ item })}
                                        keyExtractor={(item) => item.Id}
                                        horizontal
                                    />
                                </View>
                                <Text
                                    style={Styles.RelationshipText}
                                >Relationship</Text>
                                <View>
                                    <FlatList
                                        style={Styles.RelationshipList}
                                        data={Relationships}
                                        renderItem={({ item }) => RenderItemForRelationshipSelection({ item })}
                                        keyExtractor={(item) => item.Id}
                                        horizontal
                                    />
                                </View>
                                <View>
                                    <View
                                        style={Styles.GuardianLists(SelectedRelationship)}
                                    >
                                        <Text
                                            style={Styles.ChooseYourGuardianText}
                                        >Choose your guardian</Text>
                                        <FlatList
                                            style={Styles.GuardianList}
                                            data={FirstGuardianSet}
                                            renderItem={({ item }) => RenderItemForFirstGuardianSet({ item })}
                                            keyExtractor={(item) => item.Id}
                                            horizontal
                                        />
                                        <FlatList
                                            style={Styles.GuardianList}
                                            data={SecondGuardianSet}
                                            renderItem={({ item }) => RenderItemForSecondGuardianSet({ item })}
                                            keyExtractor={(item) => item.Id}
                                            horizontal
                                        />
                                        <FlatList
                                            style={Styles.GuardianList}
                                            data={ThirdGuardianSet}
                                            renderItem={({ item }) => RenderItemForThirdGuardianSet({ item })}
                                            keyExtractor={(item) => item.Id}
                                            horizontal
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={Styles.SaveButton}
                                        onPress={ToggleRoleModal}
                                    >
                                        <Text
                                            style={Styles.SaveText}
                                        >Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={SnoozeModalVisibility}
                >
                    <View
                        style={Styles.SnoozeModalContainer}
                    >
                        <View
                            style={Styles.SnoozeModal}
                        >
                            <View
                                style={Styles.SnoozeModalContentContainer}
                            >
                                <TouchableOpacity
                                    style={Styles.CloseModalButton}
                                    onPress={ToggleSnoozeModal}
                                >
                                    <Ionicons
                                        name="close"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={Styles.SnoozeText}
                                >Snooze</Text>
                                <View>
                                    <FlatList
                                        style={Styles.SnoozeList}
                                        data={FirstSnoozeSet}
                                        renderItem={({ item }) => RenderItemForFirstSnoozeSet({ item })}
                                        keyExtractor={(item) => item.Id}
                                        horizontal
                                    />
                                    <FlatList
                                        style={Styles.SnoozeList}
                                        data={SecondSnoozeSet}
                                        renderItem={({ item }) => RenderItemForSecondSnoozeSet({ item })}
                                        keyExtractor={(item) => item.Id}
                                        horizontal
                                    />
                                </View>
                                <TouchableOpacity
                                    style={Styles.SaveButton}
                                    onPress={ToggleSnoozeModal}
                                >
                                    <Text
                                        style={Styles.SaveText}
                                    >Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </LinearGradient>
        </View>
    )
}
export default EditAlarmScreen
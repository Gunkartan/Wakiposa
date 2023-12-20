import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import Styles from "./AddAlarmScreenStyle";
import { Colors } from "../../constants/Theme";
const AddAlarmScreen = ({ ModalClosingFunction }) => {
    const [RepetitionDays, SetRepetitionDays] = useState('None')
    const [Role, SetRole] = useState('Family, mother')
    const [SnoozeTime, SetSnoozeTime] = useState(10)
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
    const RenderItemForMissions = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.MissionSelectionButtons(SelectedMission, item.Name)}
                onPress={() => SetSelectedMission(item.Name)}
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
        { Id: 1, Selected: false, Day: 'S' },
        { Id: 2, Selected: false, Day: 'M' },
        { Id: 3, Selected: false, Day: 'T' },
        { Id: 4, Selected: false, Day: 'W' },
        { Id: 5, Selected: false, Day: 'T' },
        { Id: 6, Selected: false, Day: 'F' },
        { Id: 7, Selected: false, Day: 'S' },
    ])
    const ToggleSelectedDay = (DayId) => {
        const UpdatedSelectedDay = SelectedDays.map((Day) => Day.Id === DayId ? { ...Day, Selected: !Day.Selected } : Day)
        SetSelectedDays(UpdatedSelectedDay)
    }
    const SelectAllDays = () => {
        const UpdatedSelectedDays = SelectedDays.map((Day) => ({
            ...Day,
            Selected: true
        }))
        SetSelectedDays(UpdatedSelectedDays)
    }
    const SelectWeekdays = () => {
        const UpdatedSelectedDays = SelectedDays.map((Day) => ({
            ...Day,
            Selected: Day.Id >= 2 && Day.Id <= 6
        }))
        SetSelectedDays(UpdatedSelectedDays)
    }
    const SelectWeekends = () => {
        const UpdatedSelectedDays = SelectedDays.map((Day) => ({
            ...Day,
            Selected: Day.Id == 1 || Day.Id == 7
        }))
        SetSelectedDays(UpdatedSelectedDays)
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
    const RenderItemForVoiceSelection = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.VoiceSelectionButtons(SelectedVoice, item.Type)}
                onPress={() => SetSelectedVoice(item.Type)}
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
    const RenderItemForRelationshipSelection = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.RelationshipSelectionButtons(SelectedRelationship, item.Type)}
                onPress={() => SetSelectedRelationship(item.Type)}
            >
                <Text
                    style={Styles.RelationshipSelectionTexts}
                >{item.Type}</Text>
            </TouchableOpacity>
        )
    }
    const [SelectedGuardian, SetSelectedGuardian] = useState('Grandfather')
    const FirstGuardianSet = [
        { Id: 1, Member: 'Grandfather' },
        { Id: 2, Member: 'Grandmother' }
    ]
    const SecondGuardianSet = [
        { Id: 1, Member: 'Father' },
        { Id: 2, Member: 'Mother' }
    ]
    const ThirdGuardianSet = [
        { Id: 1, Member: 'Brother' },
        { Id: 2, Member: 'Sister' }
    ]
    const RenderItemForFirstGuardianSet = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.FirstGuardianSelectionButtonSet(SelectedGuardian, item.Member)}
                onPress={() => SetSelectedGuardian(item.Member)}
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
                onPress={() => SetSelectedGuardian(item.Member)}
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
                onPress={() => SetSelectedGuardian(item.Member)}
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
    const RenderItemForFirstSnoozeSet = ({ item }) => {
        return (
            <TouchableOpacity
                style={Styles.SnoozeSelectionButtons(SelectedSnooze, item.Time)}
                onPress={() => SetSelectedSnooze(item.Time)}
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
                onPress={() => SetSelectedSnooze(item.Time)}
            >
                <Text
                    style={Styles.SnoozeSelectionTexts}
                >{item.Time} min</Text>
            </TouchableOpacity>
        )
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
                        onMomentumScrollEnd={(Event) => {
                            const YOffset = Event.nativeEvent.contentOffset.y
                            const Index = Math.round(YOffset / 60)
                            SetSelectedHour(Hours[Index + 1])
                        }}
                    />
                    <FlatList
                        data={Minutes}
                        renderItem={({ item, index }) => RenderItemForMinutes({ item, index })}
                        keyExtractor={(item) => item}
                        decelerationRate='fast'
                        showsVerticalScrollIndicator={false}
                        snapToInterval={Styles.TimeItemContainer.height}
                        onMomentumScrollEnd={(Event) => {
                            const YOffset = Event.nativeEvent.contentOffset.y
                            const Index = Math.round(YOffset / 60)
                            SetSelectedMinute(Minutes[Index + 1])
                        }}
                    />
                </View>
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
                                >{RepetitionDays}</Text>
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
                        >{Role}</Text>
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
                        >{SnoozeTime} min</Text>
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
export default AddAlarmScreen
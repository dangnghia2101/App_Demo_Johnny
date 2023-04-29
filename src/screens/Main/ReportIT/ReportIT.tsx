import { CameraIcon, GalleryIcon } from '@assets'
import {
    Block,
    Button,
    Container,
    Header,
    Image,
    Text,
    TextInput,
} from '@components'
import { PERMISSION_TYPE, usePermission } from '@hooks'
import { routes } from '@navigation'
import { navigate } from '@navigation/NavigationServices'
import { useCreateReportMutation, useGetReportQuery } from '@reduxs'
import {
    DropType,
    ProblemQueryType,
    ReportType,
    SubmitProblemResponse,
} from '@reduxs/types'
import { colors, makeStyles, useTheme } from '@themes'
import { CustomToast, widthScreen } from '@utils/helper'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Platform, ScrollView, TouchableOpacity } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import DropDownPicker from 'react-native-dropdown-picker'
import { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker'
import { Asset } from 'react-native-image-picker/lib/typescript/types'

export const ReportIT = () => {
    const styles = useStyles()
    const { colors } = useTheme()
    const permission = usePermission()
    const [createReport] = useCreateReportMutation()
    const { data: reportList, isError } = useGetReportQuery(
        ProblemQueryType.IT_SUPPORT,
    )

    //State Dropdown
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [problem, setProlem] = useState<DropType[]>([])
    const [nameRoom, setNameRoom] = useState('')
    const [disabledButton, setDisabledButton] = useState(true)
    const [captureImage, setCaptureImage] = useState<Asset[]>([])
    const [selectImage, setSelectImage] = useState<Asset[]>([])

    //Form State
    const [report, setReport] = useState<ReportType>({
        room: '',
        problem: '',
        description: '',
    })

    // setRoom from searchRoomTeacher
    const setValueRoom = (name: string, room: string): void => {
        setNameRoom(name)
        setReport({ ...report, room: room })
    }

    //Get report list IT_SUPPORT
    useEffect(() => {
        if (reportList && !isError) {
            setProlem(reportList)
        }
        return () => {}
    }, [reportList])

    //Disabled Button Submit
    useEffect(() => {
        if (
            !isEmpty(report.room) &&
            !isEmpty(report.problem) &&
            !isEmpty(report.description)
        ) {
            setDisabledButton(false)
        } else {
            setDisabledButton(true)
        }
        return () => {}
    }, [report.room, report.problem, report.description])

    //Set images from camera and gallery
    useEffect(() => {
        setReport({
            ...report,
            files: captureImage.concat(selectImage),
        })
        return () => {}
    }, [captureImage, selectImage])

    //Submit problem
    const onSubmit = async () => {
        setDisabledButton(true)
        if (
            !isEmpty(report.room) &&
            !isEmpty(report.problem) &&
            !isEmpty(report.description)
        ) {
            const formData = new FormData()
            formData.append('room', report.room)
            formData.append('problem', report.problem)
            formData.append('description', report.description)
            try {
                if (report.files) {
                    report.files.map((element) => {
                        formData.append('files', {
                            name: element?.fileName,
                            type: element?.type,
                            uri:
                                Platform.OS === 'android'
                                    ? element?.uri
                                    : element?.uri?.replace('file://', ''),
                        })
                    })
                }
            } catch (e) {
                console.log('[Error get image]: ', e)
            }

            try {
                const responseCreateReport = (await createReport(formData)) as {
                    data: SubmitProblemResponse
                }
                if (responseCreateReport?.data.statusCode === 200) {
                    navigate(routes.historyDetailTeacher, {
                        id: responseCreateReport.data.data,
                    })

                    CustomToast('Tạo báo cáo thành công')
                }
            } catch (error) {
                CustomToast(
                    'Bạn tải lên quá nhiều ảnh, vui lòng chọn tối đa 5 ảnh',
                )
            }
        } else {
            CustomToast('Vui lòng nhập thông tin đầy đủ')
        }
        setDisabledButton(false)
    }

    // Options camera
    const optionsCamera: CameraOptions = {
        cameraType: 'back',
        saveToPhotos: true,
        quality: 1,
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
    }

    // Options gallery
    const optionLibrary: ImageLibraryOptions = {
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 0,
        maxWidth: 500,
        maxHeight: 500,
    }

    //Permission camera
    const showCamera = async () => {
        const status = await permission.checkPermission(PERMISSION_TYPE.camera)
        if (status === 0) {
            //granted
            const result = await launchCamera(optionsCamera)
            if (result.errorCode) {
                console.log('LaunchCamera Error: ', result.errorCode)
            } else if (result.didCancel) {
                console.log('LaunchCamera didCancel')
            } else if (result.errorMessage) {
                console.log('LaunchCamera errorMessage: ', result.errorMessage)
            } else {
                if (result.assets) {
                    setCaptureImage(result.assets)
                }
            }
        } else if (status === 1) {
            //denied
            permission.showPermissionDialog(PERMISSION_TYPE.camera)
        } else if (status === 2) {
            //unavailable
            CustomToast('Permission unavailable')
        }
    }

    //Permission gallery
    const showGallery = async () => {
        if (Platform.OS === 'ios') {
            const result = await launchImageLibrary(optionLibrary)
            if (result.errorCode) {
                console.log('LaunchImageLibrary Error: ', result.errorCode)
            } else if (result.didCancel) {
                console.log('LaunchImageLibrary didCancel')
            } else if (result.errorMessage) {
                console.log(
                    'LaunchImageLibrary errorMessage: ',
                    result.errorMessage,
                )
            } else {
                if (result.assets) {
                    setSelectImage(result.assets)
                }
            }
        } else {
            const status = await permission.checkPermission(
                PERMISSION_TYPE.library,
            )
            if (status === 0) {
                //granted
                const result = await launchImageLibrary(optionLibrary)
                if (result.errorCode) {
                    console.log('LaunchImageLibrary Error: ', result.errorCode)
                } else if (result.didCancel) {
                    console.log('LaunchImageLibrary didCancel')
                } else if (result.errorMessage) {
                    console.log(
                        'LaunchImageLibrary errorMessage: ',
                        result.errorMessage,
                    )
                } else {
                    if (result.assets) {
                        setSelectImage(result.assets)
                    }
                }
            } else if (status === 1) {
                //denied
                permission.showPermissionDialog(PERMISSION_TYPE.library)
            } else if (status === 2) {
                //unavailable
                CustomToast('Permission unavailable')
            }
        }
    }

    return (
        <Container
            backgroundColor={colors.white}
            statusColor={colors.statusBar}
        >
            <ScrollView>
                {/* Header */}
                <Header
                    showIconBack
                    title="Yêu cầu hỗ trợ CNTT"
                    lineHeight={36}
                    fontFamily="bold"
                    size={16}
                />
                <Block flex={1} paddingHorizontal={16}>
                    {/* Form */}
                    <Block marginTop={40} marginBottom={24}>
                        {/* Room */}
                        <TextInput
                            onPressIn={() =>
                                navigate(routes.searchRoomTeacher, {
                                    setValueRoom: setValueRoom,
                                })
                            }
                            onFocus={() => setOpen(false)}
                            placeholder="Phòng"
                            onChangeText={(text) =>
                                setReport({ ...report, room: text })
                            }
                            value={nameRoom}
                            style={styles.textinputBG}
                        />

                        <Block marginVertical={12} />

                        {/*Drop Down Problem*/}
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={problem}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setProlem}
                            listMode="SCROLLVIEW"
                            dropDownContainerStyle={styles.dropdownContainer}
                            listItemContainerStyle={styles.dropListContainer}
                            onChangeValue={(item) => {
                                setReport({
                                    ...report,
                                    problem: item?.toString(),
                                })
                            }}
                            showTickIcon={false}
                            style={styles.dropItem}
                            placeholder="Sự cố đang gặp phải"
                            placeholderStyle={styles.dropPlaceHolder}
                        />

                        <Block marginVertical={14} />

                        {/*Description*/}
                        <Block>
                            <TextInput
                                onFocus={() => setOpen(false)}
                                style={styles.textinputBG}
                                multiline={true}
                                onChangeText={(text) =>
                                    setReport({ ...report, description: text })
                                }
                                value={report.description}
                                numberOfLines={8}
                                textAlignVertical="top"
                                placeholder="Mô tả sự cố"
                            />
                        </Block>
                    </Block>

                    {/* Image */}
                    <Block flex>
                        <Block row justifyCenter>
                            <Block flex>
                                <TouchableOpacity
                                    style={styles.contentButton}
                                    onPress={showCamera}
                                >
                                    <CameraIcon />
                                </TouchableOpacity>
                            </Block>
                            <Block marginHorizontal={5} />
                            <Block flex>
                                <TouchableOpacity
                                    style={styles.contentButton}
                                    onPress={showGallery}
                                >
                                    <GalleryIcon />
                                </TouchableOpacity>
                            </Block>
                        </Block>

                        <Block
                            marginTop={8}
                            row
                            width={widthScreen - 37}
                            marginBottom={40}
                            space="between"
                        >
                            {report.files?.length != 0 &&
                                report.files?.length != undefined && (
                                    <Block marginHorizontal={5}>
                                        <Image
                                            source={{
                                                uri: report.files[0].uri,
                                            }}
                                            resizeMode="stretch"
                                            height={165}
                                            width={165}
                                        />
                                    </Block>
                                )}
                            {report.files?.length != 0 &&
                                report.files?.length != undefined &&
                                report.files?.length > 1 && (
                                    <Block marginHorizontal={5}>
                                        {report.files?.length > 2 && (
                                            <Block
                                                height={165}
                                                width={165}
                                                backgroundColor={
                                                    colors.shadowImage
                                                }
                                                absolute
                                                justifyCenter
                                                alignCenter
                                                zIndex={100}
                                            >
                                                <Text
                                                    size={24}
                                                    fontFamily="bold"
                                                    lineHeight={36}
                                                    color={colors.white}
                                                >
                                                    +
                                                    {report.files?.length - 2 ||
                                                        1}
                                                </Text>
                                            </Block>
                                        )}

                                        <Image
                                            source={{
                                                uri: report.files[1].uri,
                                            }}
                                            resizeMode="stretch"
                                            height={165}
                                            width={165}
                                        />
                                    </Block>
                                )}
                        </Block>
                    </Block>

                    {/* Button Submit */}
                    <Block flex>
                        <Button
                            title="Gửi yêu cầu"
                            titleProps={{ lineHeight: 18 }}
                            onPress={onSubmit}
                            disabled={disabledButton}
                        />
                    </Block>
                </Block>
            </ScrollView>
        </Container>
    )
}
const useStyles = makeStyles<{}>()(({}) => ({
    dropPlaceHolder: {
        fontSize: 12,
        paddingStart: 6,
        color: colors.light.titlePlaceholder,
    },
    dropItem: {
        backgroundColor: colors.light.grayLight,
        borderWidth: 1,
        borderColor: colors.light.border,
        zIndex: 1000,
    },
    dropListContainer: {
        height: 40,
        backgroundColor: colors.light.white,
        marginVertical: 6,
        borderRadius: 12,
        elevation: 4,
        marginHorizontal: 6,
    },
    dropdownContainer: {
        backgroundColor: colors.light.grayLight,
        borderWidth: 0,
        paddingTop: 2,
    },
    textinputBG: {
        backgroundColor: colors.light.grayLight,
    },
    contentButton: {
        alignItems: 'center',
        height: 36,
        justifyContent: 'center',
        backgroundColor: colors.light.buttonBackground,
        borderRadius: 8,
    },
}))

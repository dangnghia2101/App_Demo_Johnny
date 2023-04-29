import { Alert, Platform } from 'react-native'
import {
    check,
    PERMISSIONS,
    RESULTS,
    request,
    openSettings,
    Permission,
} from 'react-native-permissions'

export enum PermissionStatus {
    granted,
    denied,
    unavailable,
}

const CAMERA_PERMISSIONS = {
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
}

const LIBRARY_PERMISSIONS = {
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
}

const REQUEST_PERMISSION_TYPE = {
    camera: CAMERA_PERMISSIONS,
    library: LIBRARY_PERMISSIONS,
}

export const PERMISSION_TYPE = {
    camera: 'camera',
    library: 'library',
}

export const usePermission = () => {
    const requestPermission = async (permissions: Permission) => {
        try {
            const granted = await request(permissions)
            if (granted === RESULTS.GRANTED) {
                return true
            }
            return false
        } catch (err) {
            return false
        }
    }

    const checkPermission = async (type: String) => {
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]

        const result = await check(permissions)

        switch (result) {
            case RESULTS.UNAVAILABLE:
                return PermissionStatus.unavailable
            case RESULTS.DENIED:
                return PermissionStatus.denied
            case RESULTS.GRANTED:
                return PermissionStatus.granted
        }
    }

    const showPermissionDialog = async (type: String) => {
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]

        try {
            const result = await check(permissions)

            switch (result) {
                case RESULTS.UNAVAILABLE:
                    if (
                        type === PERMISSION_TYPE.camera ||
                        type === PERMISSION_TYPE.library
                    ) {
                        Alert.alert(
                            `${PERMISSION_TYPE.library} permission`,
                            `We need ${PERMISSION_TYPE.library} of your permission`,
                            [
                                {
                                    text: 'Go to Settings',
                                    onPress: () => openSettings(),
                                    style: 'cancel',
                                },
                                {
                                    text: 'Cancel',
                                    style: 'default',
                                    onPress: () => {
                                        return false
                                    },
                                },
                            ],
                        )
                    }
                    break
                case RESULTS.BLOCKED:
                    if (
                        type === PERMISSION_TYPE.camera ||
                        type === PERMISSION_TYPE.library
                    ) {
                        Alert.alert(
                            `${PERMISSION_TYPE.library} permission`,
                            `We need ${PERMISSION_TYPE.camera} of your permission`,
                            [
                                {
                                    text: 'Go to Settings',
                                    onPress: () => openSettings(),
                                    style: 'cancel',
                                },
                                {
                                    text: 'Cancel',
                                    style: 'default',
                                    onPress: () => {
                                        return false
                                    },
                                },
                            ],
                        )
                    }
                    break
                case RESULTS.DENIED:
                    if (
                        type === PERMISSION_TYPE.camera ||
                        type === PERMISSION_TYPE.library
                    ) {
                        Alert.alert(
                            `${PERMISSION_TYPE.library} permission`,
                            `We need ${PERMISSION_TYPE.camera} of your permission`,
                            [
                                {
                                    text: 'Go to Settings',
                                    onPress: () => openSettings(),
                                    style: 'cancel',
                                },
                                {
                                    text: 'Cancel',
                                    style: 'default',
                                    onPress: () => {
                                        return false
                                    },
                                },
                            ],
                        )
                    }
                    break
                case RESULTS.GRANTED:
                    return true
            }
            return requestPermission(permissions)
        } catch (err) {
            return false
        }
    }

    return {
        checkPermission,
        showPermissionDialog,
    }
}

import messaging from '@react-native-firebase/messaging'
import { useEffect } from 'react'
import { Linking } from 'react-native'
import PushNotification, { Importance } from 'react-native-push-notification'

const openDeeplink = (deeplink: string) => {
    Linking.canOpenURL(deeplink)
        .then((supported) => {
            if (supported) {
                // open the deep link
                Linking.openURL(deeplink)
            } else {
                console.log(`Cannot handle deep link`)
            }
        })
        .catch((e) => console.log('[Error open link] ', e))
}

messaging().setBackgroundMessageHandler(async () => {
    console.log('Register event ReactNativeFirebaseMessagingHeadlessTask ')
})

PushNotification?.createChannel(
    {
        channelId: 'notification-channel-id',
        channelName: 'Office Manager',
        soundName: 'sound_noti.wav',
        importance: Importance.HIGH,
        vibrate: true,
    },
    (created) => {
        console.log('notification-channel-id: ', created)
    },
)

PushNotification.configure({
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
})

const useFCM = () => {
    const requestUserPermission = async () => {
        try {
            const authorizationStatus = await messaging().requestPermission()
            if (authorizationStatus) {
                //do nothing
            }
        } catch (error) {
            console.log('requestUserPermission', error)
        }
    }

    const getDeviceToken = async () => {
        try {
            const token = await messaging().getToken()
            // await messaging().subscribeToTopic(Config.TOPIC_NAME);

            return token
        } catch (error) {
            console.log('getDeviceToken', error)
        }
    }

    useEffect(() => {
        const unsubscribe = messaging().onMessage(
            async (remoteMessage: any) => {
                PushNotification.localNotification({
                    channelId: 'notification-channel-id',
                    channelName: 'Office Manager',
                    title:
                        remoteMessage.notification?.title ||
                        remoteMessage.data.title ||
                        '',
                    bigText:
                        remoteMessage.notification?.body ||
                        remoteMessage.data.body ||
                        '', //content for Android
                    message:
                        remoteMessage.notification?.body ||
                        remoteMessage.data.body ||
                        '', //content for Ios
                    playSound: true,
                    soundName: 'sound_noti.wav',
                    priority: 'high',
                    ...remoteMessage,
                })
            },
        )

        //When the application is running, but in the background.
        messaging().onNotificationOpenedApp((remoteMessage) => {
            remoteMessage?.data?.deeplink &&
                openDeeplink(remoteMessage.data.deeplink)
        })

        //When the application is opened from a quit state.
        messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
                if (remoteMessage) {
                    remoteMessage?.data?.deeplink &&
                        openDeeplink(remoteMessage.data.deeplink)
                }
            })

        return unsubscribe
    }, [])

    return { requestUserPermission, getDeviceToken }
}

export default useFCM

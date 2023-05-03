// import { Block } from '@components/Block/index';
import { Loading } from '@components'
import { PortalProvider } from '@gorhom/portal'
import useFCM from '@hooks/useFCM'
import { RootNavigation } from '@navigation'
import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
    const { requestUserPermission } = useFCM()

    useEffect(() => {
        requestUserPermission()
        PushNotification.setApplicationIconBadgeNumber(0)
        SplashScreen.hide()
    }, [requestUserPermission])

    return (
        <SafeAreaProvider
            initialMetrics={{
                frame: { x: 0, y: 0, width: 0, height: 0 },
                insets: { top: 0, left: 0, right: 0, bottom: 0 },
            }}
        >
            <PortalProvider>
                <RootNavigation />
                {/* Modal processing upgrade app */}
                <Loading />
            </PortalProvider>
        </SafeAreaProvider>
    )
}

export default App

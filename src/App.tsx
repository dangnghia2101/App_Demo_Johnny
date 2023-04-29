// import { Block } from '@components/Block/index';
import { PortalProvider } from '@gorhom/portal'
import { RootNavigation } from '@navigation'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { persistor, store } from 'reduxs/store'

import { AlertDialog, Loading, UpgradeVersion } from '@components'
import useFCM from '@hooks/useFCM'
import PushNotification from 'react-native-push-notification'
import SplashScreen from 'react-native-splash-screen'
import { PersistGate } from 'redux-persist/lib/integration/react'

const App = () => {
  const { requestUserPermission } = useFCM()

  useEffect(() => {
    requestUserPermission()
    PushNotification.setApplicationIconBadgeNumber(0)
    SplashScreen.hide()
  }, [requestUserPermission])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider
          initialMetrics={{
            frame: { x: 0, y: 0, width: 0, height: 0 },
            insets: { top: 0, left: 0, right: 0, bottom: 0 },
          }}
        >
          <PortalProvider>
            <RootNavigation />
            {/* Modal processing upgrade app */}
            <UpgradeVersion />
            {/* Screen loading when call api */}
            <Loading />
            {/* Dialog show error when call api */}
            <AlertDialog />
          </PortalProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App

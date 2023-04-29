import { useEffect, useState, useCallback } from 'react'
import CodePush, { DownloadProgress } from 'react-native-code-push'

const useCodePush = () => {
    const [dataProgress, setDataProgress] = useState<DownloadProgress>({
        receivedBytes: 0,
        totalBytes: 0,
    })
    const [showUpgradeScreen, setShowUpgradeScreen] = useState(false)
    const [isFailed, setFailed] = useState(false)
    const [messenger, setMessenger] = useState('Đang tải về thay đổi ứng dụng.')

    const codePushStatusDidChange = useCallback(
        (syncStatus: CodePush.SyncStatus) => {
            switch (syncStatus) {
                case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    setShowUpgradeScreen(true)
                    break
                case CodePush.SyncStatus.UPDATE_INSTALLED:
                    restartApp()
                    break
                case CodePush.SyncStatus.UNKNOWN_ERROR:
                    setFailed(true)
                    restartApp()
                    setMessenger(
                        'Đã có lỗi xảy ra, vui lòng khởi động lại ứng dụng.',
                    )
                    break
                default:
                    break
            }
        },
        [],
    )

    const codePushDownloadDidProgress = (progress: DownloadProgress) => {
        setDataProgress(progress)
    }

    const restartApp = () => {
        setShowUpgradeScreen(false)
        CodePush.restartApp()
    }

    const percentUpdated = Math.ceil(
        (dataProgress?.receivedBytes / dataProgress?.totalBytes) * 100,
    )

    useEffect(() => {
        CodePush.sync({}, codePushStatusDidChange, codePushDownloadDidProgress)
    }, [])

    return {
        percentUpdated,
        restartApp,
        showUpgradeScreen,
        isFailed,
        messenger,
    }
}

export default useCodePush

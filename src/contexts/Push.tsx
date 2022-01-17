import React, {createContext, useState, useEffect} from 'react';
import OneSignal, {DeviceState, OpenedEvent} from 'react-native-onesignal';
import {Log} from '../utils/Log';

import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
// import {setPlayerIdAction} from '../store/setconsole';
// import {addDeviceID} from '../store/auth';
import {navigationRef} from '../navigation/navigation_ref';
import {useTypedSelector} from '../store/store';
import { sendOneSignalAction } from '../store/chat';

const onesignal_app_id = "46bad40b-1e14-482b-bd9f-ad6376e30bb6" ;

// @ts-ignore
const PushContext: any = createContext({
  actions: {},
  deviceID: null,
});
export default PushContext;

export const PushContextProvider: React.FC = ({children}) => {
  const [deviceID, setDeviceID] = useState<string | null>(null);
  const dispatch = useDispatch();
  const token = useTypedSelector(s => s.auth.token);

  useEffect(() => {
    console.log('deviceID', deviceID);
    if (deviceID) dispatch(sendOneSignalAction.request({oneSignal: deviceID}));
    // if (deviceID) dispatch(addDeviceID.success(deviceID));
  }, [deviceID, token]);

  const actions = {
    GET_DEVICE_ID: () => {
      return deviceID || undefined;
    },
  };

  const _actions = {
    onOpened: (e: OpenedEvent) => {
      Log.merge('PushContext ➤ _actions ➤ onOpened', e);
    },
    onReceived: (notification: any) => {
      Log.merge('PushContext ➤ _actions ➤ onReceived', notification);
    },
    onIds: (deviceInfo: any) => {
      setDeviceID(deviceInfo.userId);
      Log.merge('PushContext ➤ _actions ➤ onIds', deviceInfo);
    },
    onIosPromptCallback: (permission: any) => {
      Log.merge('PushContext ➤ _actions ➤ onIosPromptCallback', permission);
      // do something with permission value
    },
  };

  const createAllListeners = async () => {
    OneSignal.setAppId(onesignal_app_id);

    OneSignal.setLogLevel(6, 0);

    OneSignal.setRequiresUserPrivacyConsent(false);

    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      Log.info(
        'OneSignal: promptForPushNotificationsWithUserResponse:',
        response,
      );
    });

    OneSignal.setNotificationOpenedHandler(notification => {
      Log.info('OneSignal: notification opened:', notification);
      //@ts-ignore
      const link = notification.notification.additionalData.link;

      console.log('NOTIFICATIONS', notification.notification.additionalData);
      if (link) {
        const params = navigationRef.current?.getCurrentRoute();
        if (params?.name === 'Web') navigationRef.current?.setParams({link});
        // else
        //   navigationRef.current?.reset({
        //     routes: [{name: 'Web', params: {link}}],
        //   });
      }
      _actions.onOpened(notification);
    });
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        const notification = notificationReceivedEvent.getNotification();

        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    OneSignal.setInAppMessageClickHandler(event => {
      Log.info('OneSignal IAM clicked:', event);
    });

    OneSignal.addSubscriptionObserver(event => {
      Log.info('OneSignal: subscription changed:', event);
      // this.setState({ isSubscribed: event.to.isSubscribed})
    });

    OneSignal.addPermissionObserver(event => {
      Log.info('OneSignal: permission changed:', event);
    });

    const init: number = Date.now();
    let deviceState: DeviceState | undefined;

    do deviceState = await OneSignal.getDeviceState();
    while (!deviceState.userId);

    Log.info(`${deviceState.userId}`, `${Date.now() - init}`);

    setDeviceID(deviceState.userId);

    Log.info('OneSignal: deviceState', deviceState);
  };

  useEffect(() => {
    createAllListeners();
  }, []);

  return (
    <PushContext.Provider value={{actions, deviceID}}>
      {children}
    </PushContext.Provider>
  );
};

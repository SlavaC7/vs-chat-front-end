import React, {useEffect, Fragment} from 'react';

import Application from './src/navigation/Application';

import {default as store, persistor, useTypedSelector} from './src/store/store';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ContextCollector} from './src/contexts';
import {Platform, StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 3000);
  // }, []);
  return (
    <Fragment>
      {Platform.OS == 'ios' && <StatusBar />}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ContextCollector>
            <Application />
          </ContextCollector>
        </PersistGate>
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Fragment>
  );
};

export default App;

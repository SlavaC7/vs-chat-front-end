import React, {createContext, useState} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  SafeAreaContextType,
  SafeAreaContextActions,
} from './types';
// @ts-ignore
const SafeAreaContext: SafeAreaContextType = createContext({
  actions: {},
});
export default SafeAreaContext;

export const SafeAreaContextProvider: React.FC = ({children}) => {
  const [indentsTop, setIndentsTop] = useState(true);
  const [indentsBottom, setIndentsBottom] = useState(true);

  const actions: SafeAreaContextActions = {
    DISABLE_TOP: () => {
      setIndentsTop(false);
    },
    DISABLE_BOTTOM: () => {
      setIndentsBottom(false);
    },
    ENABLE: () => {
      setIndentsBottom(true);
      setIndentsTop(true);
    },
    DISABLE: () => {
      setIndentsBottom(false);
      setIndentsTop(false);
    },
  };

  return (
    <SafeAreaContext.Provider
      value={{
        actions,
      }}>
      <SafeAreaView
        forceInset={{
          top: indentsTop ? 'always' : 'never',
          bottom: indentsBottom ? 'always' : 'never',
        }}
        style={{flex: 1}}>
        {children}
      </SafeAreaView>
    </SafeAreaContext.Provider>
  );
};

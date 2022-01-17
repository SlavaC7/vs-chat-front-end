import React from 'react';

import * as Context from '.';

const ContextCollector: React.FC = ({children}) => {
  return (
    <Context.SafeAreaContextProvider>
      <Context.PushContextProvider>
        <Context.ModalContextProvider>
          <Context.WSContextProvider>{children}</Context.WSContextProvider>
        </Context.ModalContextProvider>
      </Context.PushContextProvider>
    </Context.SafeAreaContextProvider>
  );
};

export default ContextCollector;

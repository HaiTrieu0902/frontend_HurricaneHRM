import { message } from 'antd';
import React from 'react';
import { RoutesConfig } from './routes';
import LayoutMain from './layout';
export const MessageContext = React.createContext({});
function App() {
    const [api, contextHolder] = message.useMessage();
    return (
        <>
            <MessageContext.Provider value={api}>
                {contextHolder}
                {/* <RoutesConfig /> */}
                <LayoutMain />
            </MessageContext.Provider>
        </>
    );
}

export default App;

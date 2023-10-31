import React from "react";
import { Provider } from "react-redux";

import Clock from "./components/Clock";
import Tooltip from "./components/Tooltip";

import { store } from "./redux/store";

const App: React.FC = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Tooltip>
          <Clock />
        </Tooltip>
      </Provider>
    </div>
  );
};

export default App;

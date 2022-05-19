import {useEffect} from "react";

import EventsManager from "./services/realtime/manager";

import {WindowProvider} from "./contexts/window";

import AppRoutes from "./routes";

const App = () => {
  useEffect(() => { EventsManager.Setup() }, [])

  return <WindowProvider>
    <AppRoutes />
  </WindowProvider>
}

export default App;

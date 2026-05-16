import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard
from "./pages/Dashboard";

import PriorityNotifications
from "./pages/PriorityNotifications";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/priority"
          element={
            <PriorityNotifications />
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
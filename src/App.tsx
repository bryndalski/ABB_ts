import React, { useDebugValue } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";
import ProtectedRoute from "./Routes/ProtectedRoute";
import appStore from "./storage/AppStore";
import { observer } from "mobx-react";

function AppComponent() {
  useDebugValue(console.log(appStore.login));
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute
              condition={!appStore.login.logged}
              renderTrue={<Login />}
              renderFalse={<Navigate to="/" replace />}
            />
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute
              condition={appStore.login.logged}
              renderTrue={<Home />}
              renderFalse={<Navigate to="/login" replace />}
            />
          }
        />
        <Route path="*" element={<>NIe ma </>} />
      </Routes>
    </Router>
  );
}

const App = observer(AppComponent);
export default App;

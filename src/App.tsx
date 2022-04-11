import React from "react";
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
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              condition={true}
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

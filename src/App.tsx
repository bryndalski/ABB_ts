import React, { useDebugValue } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//Storage
import { observer } from "mobx-react";
import appStore from "./storage/AppStore";
//Components/Pages
import MessagePage from "./Pages/MessagePage/MessagePage";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";
import ProtectedRoute from "./Routes/ProtectedRoute";
//Icons
import { GiSadCrab } from "react-icons/gi";
import { BsEmojiSunglasses } from "react-icons/bs";
import ProfilePage from "./Pages/Profile/ProfilePage";
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
        {/* Main Page */}
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
        {/* Log out display page */}
        <Route
          path="/loggedOut"
          element={
            <ProtectedRoute
              condition={!appStore.login.logged}
              renderFalse={<Navigate to="/" replace />}
              renderTrue={
                <MessagePage
                  direction="/login"
                  title="Wylogowano pomyślnie"
                  message={`Miłego dnia ${appStore.login.username}`}
                  icon={<BsEmojiSunglasses className=" w-1/2 h-full" />}
                />
              }
            />
          }
        />
        {/* user menagement side */}
        <Route path="/user" element={<ProfilePage />} />

        {/* PAGE NOT FOUND */}
        <Route
          path="*"
          element={
            <MessagePage
              direction="/"
              title="Nie znaleziono strony"
              message={`Niestety... Taka strona nie istenieje... Zostaniesz przekierowany do strony  ${
                appStore.login.logged ? "Główną" : "Logowania"
              }`}
              icon={<GiSadCrab className=" w-1/2 h-full" />}
            />
          }
        />
      </Routes>
    </Router>
  );
}

const App = observer(AppComponent);
export default App;

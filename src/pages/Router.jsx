import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import WelcomePage from "./Welcome page/WelcomePage";
import HomePage from "./Welcome page/HomePage";
import LogIn from "./Authentification/LogIn";
import SignUp from "./Authentification/SignUp";
import ProfilePage from "./Profile/ProfilePage";
import PageError404 from "./Error/PageError404";
import SettingsPage from "./Settings/SettingsPage";
import FavorisPage from "./Favoris/FavorisPage";

function Router({ user, userRole }) {
    // user is a boolean to know if he's connected or no 
    // userRole (moderator, client)

    return (
        <Routes>
            <Route path="/404error" element={<PageError404 />} />
            {user ? (
                userRole === "client" ? (
                    // client part 
                    <Route path="/" element={<Layout />}>
                        <>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/saved" element={<FavorisPage />} />
                            <Route path="/settings" element={<SettingsPage />} />
                        </>
                    </Route>
                ) : (
                    // moderators part 
                    <Route path="/" element={<Layout />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/saved" element={<FavorisPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Route>
                )
            ) : (
                <Route>
                    <Route path="/" element={<Layout />}>
                        <Route index path="/" element={<WelcomePage />} />
                    </Route>
                    <Route index path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
            )}
        </Routes>
    );
}

export default Router;

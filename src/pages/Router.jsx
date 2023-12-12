import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LayoutHome from "./LayoutHome";
import WelcomePage from "./Welcome page/WelcomePage";
import HomePage from "./Welcome page/HomePage";
import LogIn from "./Authentification/LogIn";
import SignUp from "./Authentification/SignUp";
import ProfilePage from "./Profile/ProfilePage";
import PageError404 from "./Error/PageError404";
import SettingsPage from "./Settings/SettingsPage";
import CollectionsPage from "./Collections/CollectionsPage";
import AdminPage from "./Admin/AdminPage";
import ModeratorPage from "./Moderators/ModeratorPage";
import FavoriArticlesListPage from "./Collections/FavoriArticlesPage";

function Router({ user, userRole }) {
    // user is a boolean to know if he's connected or no 
    // userRole (moderator, client)

    return (
        <Routes>
            <Route path="/404error" element={<PageError404 />} />
            {user ? (
                userRole === "client" ? (
                    // client part 
                    <>
                        <Route path="/" element={<LayoutHome userRole={"client"} />}>
                            <Route path="/home" element={<HomePage />} />
                        </Route>
                        <Route path="/" element={<Layout userRole={"client"} />}>
                            <>
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/collections" element={<CollectionsPage />} />
                                <Route path="/collection/:collectionId" element={<FavoriArticlesListPage />} />
                                <Route path="/settings" element={<SettingsPage />} />
                            </>
                        </Route>
                    </>
                ) : userRole === "moderator" ? (
                    // moderators part 
                    <Route path="/" element={<LayoutHome userRole={"moderator"} />}>
                        <Route path="/" element={<ModeratorPage />} />
                    </Route>
                ) : (
                    // admins part 
                    <Route path="/" element={<LayoutHome userRole={"admin"} />}>
                        <Route path="/" element={<AdminPage />} />
                    </Route>
                )
            ) : (
                <Route>
                    <Route index path="/" element={<WelcomePage />} />
                    <Route index path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
            )}
        </Routes>
    );
}

export default Router;

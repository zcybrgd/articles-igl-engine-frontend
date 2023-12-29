import React from "react"
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LayoutHome from "./LayoutHome";
import LayoutArticle from "./LayoutArticle";
import LayoutWelcome from "./LayoutWelcome";
import WelcomePage from "../pages/Welcome page/WelcomePage";
import HomePage from "../pages/Welcome page/HomePage";
import ProfilePage from "../pages/Profile/ProfilePage";
import PageError404 from "../pages/Error/PageError404";
import SettingsPage from "../pages/Settings/SettingsPage";
import CollectionsPage from "../pages/Collections/CollectionsPage";
import AdminPage from "../pages/Admin/AdminPage";
import ModeratorPage from "../pages/Moderators/ModeratorPage";
import FavoriArticlesListPage from "../pages/Collections/FavoriArticlesPage";
import SearchPage from "../pages/Search Results/SearchPage";
import ArticleDetails from "../pages/Article/ArticleDetails";
import SignUpPage from "../pages/Authentification/SignUp";
import LoginPage from "../pages/Authentification/LogIn";
import AddNewModeratorPage from "../pages/Admin/AddNewModeratorPage";
import { useAuth } from "../context/AuthContext";

function Router() {
    const { userRole } = useAuth();

    return (
        <Routes>
            <Route path="/404error" element={<PageError404 />} />
            {userRole ? (
                userRole === "client" ? (
                    // client part 
                    <>
                        <Route path="/" element={<LayoutHome userRole={"client"} />}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/welcome" element={<WelcomePage />} />
                            <Route path="/search" element={<SearchPage />} />
                        </Route>
                        <Route path="/" element={<Layout userRole={"client"} />}>
                            <>
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/collections" element={<CollectionsPage />} />
                                <Route path="/collection/:collectionId" element={<FavoriArticlesListPage />} />
                                <Route path="/settings" element={<SettingsPage />} />
                            </>
                        </Route>
                        <Route path="/" element={<LayoutArticle userRole={"client"} />}>
                            <Route path="/article/:articleId" element={<ArticleDetails />} />
                        </Route>
                    </>
                ) : userRole === "moderator" ? (
                    // moderators part 
                    <>
                        <Route path="/" element={<LayoutHome userRole={"moderator"} />}>
                            <Route path="/" element={<ModeratorPage />} />
                        </Route>
                        <Route path="/" element={<LayoutArticle userRole={"moderator"} />}>
                            <Route path="/article/:articleId" element={<ArticleDetails />} />
                        </Route>
                    </>
                ) : (
                    // admins part 
                    <>
                        <Route path="/" element={<LayoutHome userRole={"admin"} />}>
                            <Route path="/" element={<AdminPage />} />
                        </Route>
                        <Route path="/newModerator" element={<AddNewModeratorPage />} />
                    </>
                )
            ) : (

                <Route>
                    <Route path="/" element={<LayoutWelcome />}>
                        <Route path="/" element={<WelcomePage />} />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Route>
            )}
        </Routes>
    );
}

export default Router;
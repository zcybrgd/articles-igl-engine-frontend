import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LayoutHome from "./LayoutHome";
import LayoutArticle from "./LayoutArticle";
import LayoutWelcome from "./LayoutWelcome";
import WelcomePage from "./Welcome page/WelcomePage";
import HomePage from "./Welcome page/HomePage";
import ProfilePage from "./Profile/ProfilePage";
import PageError404 from "./Error/PageError404";
import SettingsPage from "./Settings/SettingsPage";
import CollectionsPage from "./Collections/CollectionsPage";
import AdminPage from "./Admin/AdminPage";
import ModeratorPage from "./Moderators/ModeratorPage";
import FavoriArticlesListPage from "./Collections/FavoriArticlesPage";
import SearchPage from "./Search Results/SearchPage";
import ArticleDetails from "./Article/ArticleDetails";
import SignUpPage from "./Authentification/SignUp";
import LoginPage from "./Authentification/LogIn";

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
                    <Route path="/" element={<LayoutHome userRole={"admin"} />}>
                        <Route path="/" element={<AdminPage />} />
                    </Route>
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
import React from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import Layout from "../pages/Layout";
import LayoutHome from "../pages/LayoutHome";
import LayoutArticle from "../pages/LayoutArticle";
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

function AuthenticatedRouter({ userRole }) {
  return (
    <Routes>
      <Route path="/404error" element={<PageError404 />} />
      {userRole === "client" ? (
        // client part
        <>
          <Route path="/" element={<LayoutHome userRole={"client"} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/" element={<Layout userRole={"client"} />}>
            <>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route
                path="/collection/:collectionId"
                element={<FavoriArticlesListPage />}
              />
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
      )}
    </Routes>
  );
}



export default AuthenticatedRouter;

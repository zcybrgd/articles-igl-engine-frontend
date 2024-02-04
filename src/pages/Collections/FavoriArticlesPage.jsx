import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import Paper from "../../assets/styling/paper.svg"
import Article from "../../components/Article/Article";
import { useAuth } from "../../context/AuthContext";
import { displayFavorites } from "../../services/favoritesApi";


/**
 * Displays Articles in the collection
 * @date 2/4/2024 - 7:39:02 PM
 *
 * @returns {*}
 */
function FavoriArticlesListPage() {
    const { token } = useAuth();
    const [articles, setArticles] = useState(0)
    const location = useLocation();
    const collection = location.state.collection;

    useEffect(() => {
        /**
         * Fetches and displays the user's favorite articles asynchronously.
         *
         * @async
         * @function
         * @throws {Error} Throws an error if there is an issue loading the favorite articles.
         */
        const favorites = async () => {
            try {
                /**
                 * Fetch and display the user's favorite articles.
                 *
                 * @function
                 * @param {string} token 
                 * @returns {Object}
                 */
                const response = await displayFavorites(token);

                if (response.favorite_articles) {
                    /**
                     * Set the favorite articles in the component state.
                     *
                     * @function
                     * @param {Array} articles 
                     */
                    setArticles(response.favorite_articles);
                } else {
                    console.log(response);
                    /**
                     * Handles errors when there is an issue loading the favorite articles.
                     *
                     * @throws {Error} 
                     */
                    console.error("Error loading Favorite Articles:", response);
                }
            } catch (error) {
                /**
                 * Handles errors that may occur during the asynchronous operation.
                 *
                 * @param {Error} error 
                 */
                console.error("Error during favorites operation:", error);
                throw new Error("Failed to load favorite articles. Please try again.");
            }
        };

        favorites();
    }, [articles])

    return (
        <div className="flex flex-col items-start w-[100%] pl-5 md:pl-0">
            <div className="flex flex-col w-[100%] mb-8 justify-start items-start">
                <div className="flex flex-row ">
                    <p className="text-black font-dmsansmedium text-[35px] font-semibold">
                        {collection.collectionName}
                    </p>
                    <span className="ml-3">
                        <img src={Paper} alt="papers icon" className="w-[50px] h-[50px]" />
                    </span>
                </div>
                <p className="text-[#707F65] font-dmsansbold text-[15px]">{articles.length} articles</p>
            </div>

            {/* affichage des articles  */}
            <div className="flex flex-col w-[100%]">
                {articles && articles.map((article) => (
                    <div key={article.id} className="flex mb-5">
                        <Article article={article} isfav={true} userRole={"client"} page={'saved'} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FavoriArticlesListPage
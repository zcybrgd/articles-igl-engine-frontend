import React from "react"
import Collection from "../../components/Article/Collection"
import { useNavigate } from 'react-router-dom';
import { collections } from "../../testing Data/collectionsData"
import Paper from "../../assets/styling/paper.svg";


/**
 * Display collections
 * @date 2/4/2024 - 7:37:46 PM
 *
 * @returns {*}
 */
function CollectionsPage() {
    const navigate = useNavigate();

    /**
     * Navigates to the specified collection page asynchronously.
     *
     * @async
     * @function
     * @param {Object} collection - The collection object to be passed to the collection page.
     * @param {string} collection.collectionId - The unique identifier of the collection.
     * @param {string} collection.title - The title of the collection.
     * @throws {Error} Throws an error if there is an issue loading the collection page.
     */
    async function openCollection(collection) {
        try {
            /**
             * Navigate to the specified collection page.
             *
             * @function
             * @param {string} path - The path to navigate to (e.g., `/collection/${collection.collectionId}`).
             * @param {Object} state - The state object to pass to the collection page.
             * @param {Object} state.collection - The collection object.
             */
            navigate(`/collection/${collection.collectionId}`, {
                state: { collection: collection },  // Pass the collection and articles as an object
            });
        } catch (error) {
            console.error("Error loading FavoriArticlesListPage:", error);
        }
    }

    return (
        <div className="flex flex-col items-start pl-5 md:pl-0">
            <div className="flex flex-col mb-8 justify-start items-start">
                <div className="flex flex-row ">
                    <p className="text-black font-dmsansmedium text-[35px] font-semibold">
                        Collections </p>
                    <span className="ml-3">
                        <img src={Paper} alt="papers icon" className="w-[50px] h-[50px]" />
                    </span>
                </div>
                <p className="text-[#707F65] font-dmsansbold text-[15px]">{collections.length} collections</p>
            </div>
            <div className="flex flex-wrap m-0">
                {collections.map((collection, index) => (
                    <div key={index} className="p-1 lg:p-4 cursor-pointer" onClick={() => openCollection(collection)}>
                        <Collection collectionName={collection.collectionName} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CollectionsPage
import React from "react"
import Collection from "../../components/Article/Collection"
import { useNavigate } from 'react-router-dom';
import { collections } from "../../testing Data/collectionsData"
import Paper from "../../assets/styling/paper.svg";

function CollectionsPage() {
    const navigate = useNavigate();


    async function openCollection(collection) {
        try {
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
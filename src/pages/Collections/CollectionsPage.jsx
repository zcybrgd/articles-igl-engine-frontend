import React, { useState } from "react"
import Collection from "../../components/Article/Collection"
import { useNavigate } from 'react-router-dom';
import { collections } from "../../testing Data/collectionsData"
import Paper from "../../assets/paper.svg"


function CollectionsPage() {
    const navigate = useNavigate();

    function openCollection(collection) {
        try {
            navigate(`/collection/${collection.collectionId}`,
                { state: collection },  //pass the collection to the articlesPage
            );
        } catch (error) {
            console.error("Error loading FavoriArticlesListPage:", error);
        }
    }

    return (
        <div className="flex flex-col items-start">
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
                    <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-1 lg:p-4 cursor-pointer" onClick={() => openCollection(collection)}>
                        <Collection collectionName={collection.collectionName} nbArticles={collection.nbArticles} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CollectionsPage

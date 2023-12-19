import React from "react"
import { useLocation } from "react-router-dom";
import Paper from "../../assets/paper.svg"
import Article from "../../components/Article/Article";
import { articles } from "../../testing Data/ArticlesData";


function FavoriArticlesListPage() {
    const location = useLocation();
    const collection = location.state;

    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-col mb-8 justify-start items-start">
                <div className="flex flex-row ">
                    <p className="text-black text-[35px] font-semibold">
                        {collection.collectionName}
                    </p>
                    <span className="ml-3">
                        <img src={Paper} alt="papers icon" className="w-[50px] h-[50px]" />
                    </span>
                </div>
                <p className="text-[#707F65] text-[15px]">{collection.nbArticles} articles</p>
            </div>
            {/* boucle ta3 les articles */}
            <div className="flex flex-col">
                {articles && articles.map((article, index) => (
                    <div key={index} className="flex mb-5">
                        <Article article={article} isfav={true} userRole={"client"} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FavoriArticlesListPage

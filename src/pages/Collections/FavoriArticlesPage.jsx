import React ,{ useState ,useEffect }from "react"
import { useLocation } from "react-router-dom";
import Paper from "../../assets/paper.svg"
import Article from "../../components/Article/Article";
import { useAuth } from "../../context/AuthContext";
import { displayFavorites } from "../../services/favoritesApi";


function FavoriArticlesListPage() {
    const { token } = useAuth();
    const [articles,setArticles] = useState(0)
    const location = useLocation();
    const collection = location.state.collection;

   useEffect(()=>{
    const favorites = async () =>
        {
            const response = await displayFavorites(token)
            if(response.favorite_articles) {
                setArticles(response.favorite_articles);
            } else {
            console.log(response)
            console.error("Error loading FavoriArticlesListPage:");
            } 
        };
        favorites();
   },[articles])
        
    

    return (
        <div className="flex flex-col items-start w-[100%]">
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
            {/* boucle ta3 les articles */}
            <div className="flex flex-col w-[100%]">
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

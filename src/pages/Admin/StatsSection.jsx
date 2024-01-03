import React, { useState ,useEffect } from "react"
import BarChart from '../../components/Admin cards/BarChart';
import PieChart from "../../components/Admin cards/PieChart";
import StatCard from "../../components/Article/StatCard";
import { useAuth } from "../../context/AuthContext";
import { deletedArticles, totalArticles, unreviewedArticles, addedMods, modifiedArticles, validatedArticles, deletedMods, totalMods } from "../../services/statsApi";



function StatsSection() {
    const { token } = useAuth();
    const [NumberTotalArticles,setNumberTotalArticles] = useState(0)
    const [NumberWaitingArticles,setNumberWaitingArticles] = useState(0)
    const [NumberDeletedArticles,setNumberDeletedArticles] = useState(0)
    const [NumberModifiedArticles,setNumberModifiedArticles] = useState(0)
    const [NumberValidatedArticles,setNumberValidatedArticles] = useState(0)
    const [NumberTotalMods,setNumberTotalMods] = useState(0)
    const [NumberAddedMods,setNumberAddedMods] = useState(0)
    const [NumberDeletedMods,setNumberDeletedMods] = useState(0)

    useEffect( ()=>{
        const total = async () =>
        {
            const response = await totalArticles()
            if(response.total) {
                setNumberTotalArticles(response.total);
            } else {
            console.log(response)
            console.log('An error occurred :(');
            } 
        };
        const unreviewedTotal = async () =>
        {
            const response = await unreviewedArticles()
            if(response.total) {
                setNumberWaitingArticles(response.total);
            } else {
            console.log(response)
            console.log('An error occurred :(');
            } 
        };
        const deletedArticle = async () =>
        {
            const response = await deletedArticles(token)
            if(response.deleted_articles) {
                setNumberDeletedArticles(response.deleted_articles);
            } else {
            console.log(response)
            console.log('An error occurred :(');
            } 
        };
        const modifiedArticle = async () =>
        {
            const response = await modifiedArticles(token)
            if(response.modified_articles) {
                setNumberModifiedArticles(response.modified_articles);
            } else {
            console.log(response)
            console.log('An error occurred :(');
            } 
        };
        const validatedArticle = async () =>
        {
            const response = await validatedArticles(token)
            if(response.validated_articles) {
                setNumberValidatedArticles(response.validated_articles);
            } else {
            console.log(response)
            console.log('An error occurred :(');
            } 
        };
        const NumberTotalMods = async () =>
        {
            const response = await totalMods(token)
            if(response.total_mods) {
                setNumberTotalMods(response.total_mods);
            } else {
            console.log(response)
            console.log('An error occurred :(');
            } 
        };
        const NumberAddedMods = async () =>
        {
            const response = await addedMods(token)
            if(response.added_mods) {
                setNumberAddedMods(response.added_mods);
            } else {
            console.log(response)
            console.log('An error occurred :(');
            } 
        };
        const NumberDeletedMods = async () =>
        {
            const response = await deletedMods(token)
            if(response.deleted_mods) {
                setNumberDeletedMods(response.deleted_mods);
            } else {
            console.log(response)
            console.log('An error occurred :(');
            } 
        };
        total();
        unreviewedTotal();
        deletedArticle();
        modifiedArticle();
        validatedArticle();
        NumberTotalMods();
        NumberAddedMods();
        NumberDeletedMods();
    },[]);

    // testing data 
    const BarchartData = [NumberValidatedArticles, NumberWaitingArticles, NumberDeletedArticles,  NumberModifiedArticles];
    const PiechartData = [NumberAddedMods, NumberDeletedMods];

    //************** */

    // Labels: 
    const BarchartLabels = ['Validated', 'Unreviewed', 'Deleted', 'Modified'];
    const PiechartLabels = ['Added', 'Deleted'];

    return (
        <div className="flex flex-col border-2 rounded-3xl w-[100%]">
            {/* title part  */}
            <div className="flex flex-col items-start justify-start p-5 mb-5">
                <p className="text-black text-[32px] font-dmsansbold ">Stats</p>
                <p className="text-[#797D8C] text-[16px] font-dmsansbold ">Representative of the files modifications</p>
            </div>

            {/* stats part  */}
            <div className="flex flex-col w-full justify-center space-y-5 items-center">
                {/* Cards part  */}
                <div className="flex flex-col md:flex-row w-full justify-center p-5 px-8 items-center space-y-10 md:space-y-0 md:space-x-10">
                    <StatCard title='Total articles' value={NumberTotalArticles} />
                    <StatCard title='Unreviewed' value={NumberWaitingArticles} />
                    <StatCard title='Deleted' value={NumberDeletedArticles} />
                </div>
                <div className="flex flex-col md:flex-row w-full">
                    {/* articles stats  */}
                    <div className="App md:w-3/5 justify-start items-start text-start bg-white shadow-lg rounded-3xl m-10">
                        <p className="text-black font-dmsansmedium text-[35px] p-10">About your articles</p>
                        <BarChart data={BarchartData} labels={BarchartLabels} />
                    </div>

                    {/* moderators stats */}
                    <div className="flex flex-col relative md:w-2/5 justify-start items-start text-start shadow-lg rounded-3xl m-10">
                        <p className="text-[#7A7A7A] font-dmsansmedium text-[20px] p-5">Your moderators</p>
                        <PieChart data={PiechartData} labels={PiechartLabels} />
                        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <p className="text-black font-dmsansbold" style={{ lineHeight: '0.9' }}>
                                <span className="text-[50px] m-0 p-0 block">{NumberTotalMods}</span>
                                <span className="text-[20px] m-0 p=0 block">Moderators</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsSection
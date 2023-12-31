import React from "react"
import BarChart from '../../components/Admin cards/BarChart';
import PieChart from "../../components/Admin cards/PieChart";
import { moderators } from "../../testing Data/ModeratorsList";


function StatsSection() {

    // testing data 
    const BarchartData = [12, 19, 50, 5, 20];
    const PiechartData = [12, 19];
    //************** */

    // Labels: 
    const BarchartLabels = ['Validated', 'Waiting for validation', 'Deleted', 'Added', 'Modified'];
    const PiechartLabels = ['Added', 'Deleted'];

    return (
        <div className="flex flex-col border-2 rounded-3xl w-[100%]">
            {/* title part  */}
            <div className="flex flex-col items-start justify-start p-5 mb-5">
                <p className="text-black text-[32px] font-dmsansbold ">Stats</p>
                <p className="text-[#797D8C] text-[16px] font-dmsansbold ">Representative of the files modifications</p>
            </div>

            {/* stats part  */}
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
                            <span className="text-[50px] m-0 p-0 block">{moderators.length}</span>
                            <span className="text-[20px] m-0 p=0 block">Moderators</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsSection

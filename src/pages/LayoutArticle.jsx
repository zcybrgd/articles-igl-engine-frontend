import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/NavBar/NavBar";

const LayoutArticle = ({ userRole }) => {
    return (
        <div className="flex bg-[#707F65] w-[100%]">
            <Navbar userRole={userRole} article={true} />

            {/* absolute top-0 left-0 right-0 */}
            <div className="absolute top-0 left-0 right-0 bg-[#707F65] justify-center items-center ">
                <div className="flex items-center justify-center lg:ml-10 lg::p-10 mt-20 md:mt-10 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default LayoutArticle;

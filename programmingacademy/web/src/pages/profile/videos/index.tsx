import Navbar from "../../../components/navbar";
import { Pages } from "../../../Enums/navbar";

export default function Videos() {
    return (
        <div className="bg-[url('./background9.jpg')] h-screen">
            <Navbar pageActive={Pages.profileVideos} />

            <div className='h-full flex justify-center items-center'></div>
        </div>
    )
}
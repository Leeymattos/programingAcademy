import Navbar from "../../../components/navbar";
import { Pages } from "../../../Enums/navbar";


export default function Github() {
    return (
        <div className="bg-[url('./background9.jpg')] h-screen">
            <Navbar pageActive={Pages.profileGithub} />
        </div>

    )
}
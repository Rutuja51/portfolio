import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../../globals.css";
export default function Footer(){
    return (
        <div className="bg-[#1b222b] text-white p-3 mt-16 pt-32 pb-16 text-xl animate-[slideUp_1.8s_ease-out_forwards]">
            <p className="text-center">&copy; 2026 Rutuja Mule. All rights reserved.</p>
            <p className="text-center mb-8">Frontend Developer &nbsp;| &nbsp;React.js &nbsp;| &nbsp;Next.js &nbsp;| &nbsp;Tailwind CSS </p>
            <div className="flex justify-center text-3xl">
                <FaGithub className="footer-icons" />
                <FaLinkedin className="footer-icons" />
                <FaEnvelope className="footer-icons" />
            </div>
        </div>
    )
}
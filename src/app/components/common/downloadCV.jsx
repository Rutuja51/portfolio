"use client";
import { FaArrowDown } from "react-icons/fa";
export default function DownloadCV() {

    let downlaod = () =>{
        console.log("Downloaded")
    }
    return (
        <>
            <a className="bg-blue-800 p-2 w-50 rounded-xl text-white shadow-xl fixed right-10 flex justify-around items-center" href="/files/sample.pdf" download={'rutuja_mule_CV.pdf'}>Download Resume
                <FaArrowDown /> </a>
            
        </>
    )
}
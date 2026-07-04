import Link from "next/link";
import "../../globals.css";
export default function Header(){
    return (
       <div className="bg-gray-800 text-white shadow-xl/30 sm:fixed sm:top-0  sm:right-0 sm:left-0"> 
       {/* #0768de #1b222b */}
        <nav>
            <ul className="sm:flex p-3 pl-12">
                <li className="nav-item">
                    <Link href={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link href={'/about'}>About Me</Link>
                </li>
                <li className="nav-item">
                    <Link href={'/skills'}>skills</Link>
                </li>
                <li className="nav-item">
                    <Link href={'/projects'}>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link href={'/experiences'}>Experience & Education</Link>
                </li>
                <li className="nav-item">
                    <Link href={'/contact'}>contact</Link>
                </li>
                <li className="nav-item">
                    <Link href={'/resume'}>Resume</Link>
                </li>

            </ul>
        </nav>
       </div>
    )
}
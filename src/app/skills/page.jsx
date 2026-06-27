import SkillCard from "../components/routes-components/SkillCard.jsx"
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaAngular,FaNodeJs,FaGitAlt,FaGithub,FaFigma  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman,SiMongodb,SiPostgresql   } from "react-icons/si";
export default function Skills(){
    let skills = [
        {"name" : "html","textCol": "text-blue-600","icon":FaHtml5},
        {"name" : "css","textCol": "text-orange-600","icon":FaCss3Alt },
        {"name" : "Js","textCol": "text-yellow-600","icon":FaJs },
        {"name" : "React","textCol": "text-blue-600","icon":FaReact },
        {"name" : "Next.js","textCol": "text-green-600","icon":FaHtml5},
        {"name" : "Angular","textCol": "text-dark-600","icon":FaAngular },
        {"name" : "Tailwind","textCol": "text-sky-600","icon":RiTailwindCssFill},
        {"name" : "Node.js","textCol": "text-blue-600","icon":FaNodeJs},
        {"name" : "Git","textCol": "text-dark-600","icon":FaGitAlt},
        {"name" : "Postman","textCol": "text-orange-600","icon":SiPostman},
        {"name" : "MongoDb","textCol": "text-green-600","icon":SiMongodb },
        {"name" : "SQL","textCol": "text-blue-600","icon":SiPostgresql},
        {"name" : "Github","textCol": "text-dark-600","icon":FaGithub },
        {"name" : "figma","textCol": "text-pink-600","icon":FaFigma}
        
    ]
    return(
        <>
            <main className="Skill-page ">
                <h1 className="text-5xl font-md mb-8">Skills</h1>
                <div className="flex flex-wrap gap-16">
                    {
                    skills.map(new_skill=>(
                        <SkillCard skill={new_skill} key={new_skill.name}></SkillCard>
                    ))
                }
                </div>

            </main>
        </>
    )
}
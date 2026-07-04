import ProjectCard from "../components/ProjectCard.jsx"
export default function Projects(){

    let project_arr = [
        {"project_name" : "Portfolio", 
            "img_url" :"/portfolio_img.jpg" ,
            "project_url" :"https://portfolio-nu-green-65.vercel.app/",
            "desc":"This project shows whole information about me ... ",
            "gitHub":"https://github.com/Rutuja51/portfolio"},

        {"project_name" : "WonderLust", 
            "img_url" :"/wanderlust_img.jpg" ,
            "project_url" :"https://wanderlust-bookings-sq7q.onrender.com/listings",
            "desc":"This is replica of make my trip implementing all crud Operation in Js ... ",
            "gitHub":"https://github.com/Rutuja51/wanderlust_bookings"},

        {"project_name" : "Music_app", 
            "img_url" :"/music_img.jpg" ,
            "project_url" :"https://music-app-three-beta.vercel.app/",
            "desc":"This is replica of spotify implementing CSS and Bootstrap Concepts ... ",
            "gitHub":"https://github.com/Rutuja51/music_app"},
    ]
    return (
        <>
            <main className="project-page">
                <h1 className="sm:text-5xl text-3xl font-md mb-8 max-sm:text-center">Projects</h1>
                <div className="flex flex-wrap gap-16">
                {
                    project_arr.map((project)=>(
                        <ProjectCard project={project} key={project.project_name}></ProjectCard>
                    ))
                }
                </div>
            </main>
            
            
        </>
    )
}
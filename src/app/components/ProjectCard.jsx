export default function ProjectCard({project}){
    return (
        <>
            <div className="project-card">
                <div className="project-card-header bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: `url(${project.img_url})`,
                }}>
                   
                </div>

                <h3 className="text-2xl underline font-2xl">{project.project_name}</h3>
                <p className="text-gray-900 mb-2 mt-4 text-xl">
                    {project.desc}
                </p>

                <p>
                    <a className="text-indigo-800 m-2 text-lg underline" href={project.project_url} target="new">Deployed Url</a> <br />
                    <a className="text-purple-800 m-2 text-lg underline" href={project.gitHub} target="new">GitHub Url</a>
                </p>
            </div>
        </>
    )
}
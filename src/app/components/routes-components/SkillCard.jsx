
export default function SkillCard({skill}){
    return(
        <>
            <div className="skill-card">
                <p className={`sm:text-4xl text-2xl ${skill.textCol}`}>
                    <skill.icon />
                </p>
                <h4 className="sm:text-xl text-sm underline uppercase">
                    {skill.name}
                </h4>
            </div>
        </>
    )
}
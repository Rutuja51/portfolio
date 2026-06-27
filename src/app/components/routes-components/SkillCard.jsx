
export default function SkillCard({skill}){
    return(
        <>
            <div className="skill-card">
                <p className={`text-4xl ${skill.textCol}`}>
                    <skill.icon />
                </p>
                <h4 className="text-xl underline uppercase">
                    {skill.name}
                </h4>
            </div>
        </>
    )
}
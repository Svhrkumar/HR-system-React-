import React from "react"

interface SkillCompProp{
    skills:string[]
}

const SkillComp :React.FC<SkillCompProp> =  ({skills}) => {
    return (
        <div className="flex flex-col w-[40%]">
            <div className="flex flex-col w-full">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                    {skills.map((skill, index) => (
                        <span
                            className="px-2 py-1 bg-slate-100 text-slate-800 rounded text-xs border"
                            key={index}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-full mt-4">
                <h3 className="text-lg font-semibold mb-2">Compensation</h3>
                <div className="flex justify-between mt-1 w-full">
                    <div className="flex flex-col">
                        <span className="font-medium">Current CTC </span>
                        <span className="font-medium">12LPA</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium">Expected CTC</span>
                        <span className="font-medium">12LPA</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1 justify-between w-full">
                    <div className="flex flex-col  ">
                        <span className="font-medium">Notice Period</span>
                        <span className="font-medium">90 days</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium">Expected Joining</span>
                        <span className="font-medium">21-05-2025</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillComp
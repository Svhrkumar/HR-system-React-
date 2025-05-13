import React from "react"

interface eduProps {
    educationData: {
        degree: string,
        college: string,
        year: string
    }[]
}
const Education: React.FC<eduProps> = ({ educationData }) => {
    return (
        <div className="w-[35%]">
            <h3 className="text-lg font-semibold mb-2">Education Details</h3>
            <div className="space-y-3 pl-2">
                {educationData.map((edu, index) => (
                    <div key={index} className="flex flex-col">
                        <span className="font-medium text-base">{edu.degree}</span>
                        <span className="text-sm text-gray-600">{edu.college}</span>
                        <span className="text-sm text-gray-500">{edu.year}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
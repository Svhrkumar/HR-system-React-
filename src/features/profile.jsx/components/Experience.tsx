import React from "react"


interface ExpProps {
    experienceData: {
      company: string;
      role: string;
      from: string | number;
      to: string | number;
    }[];
  }

const Experience : React.FC<ExpProps> = ({experienceData}) => {
    return(
        <div className="mb-6 w-[35%]">
                    <h3 className="text-lg font-semibold mb-2">Experience Details</h3>
                    <div className="overflow-y-scroll custom-scrollbar p-2 h-[90%]">
                        <div className="border-l-2 border-blue-500 pl-4 space-y-4">
                            {experienceData.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-5.5 top-1 w-3 h-3 bg-blue-500 rounded-full "></div>
                                    <div className="flex flex-col ml-3">
                                        <span className="font-medium text-base">{item.company}</span>
                                        <span className="text-sm text-gray-600">{item.role}</span>
                                        <span className="text-sm text-gray-500">
                                            {item.from} - {item.to}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
    )
}

export default Experience
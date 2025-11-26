import React from "react";
interface ProcessProps {
    steps:string[],
    currentStep:number
}
const ProcessStepper :React.FC<ProcessProps> = ({steps,currentStep}) => {

    return(
        <div className="flex items-center justify-between mb-8 p-2">
        {steps.map((step, index) => {
            return(
            <div key={step} className="flex items-center w-full relative">
                {/* Circle */}
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm z-10 ${index < currentStep
                        ? "bg-green-500"
                        : index === currentStep
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        }`}
                >
                    {index + 1}
                </div>

                {/* Label */}
                <div className="absolute top-10 text-xs text-center w-24 -ml-8">
                    {step}
                </div>

                {/* Line */}
                {index < steps.length - 1 && (
                    <div
                        className={`flex-1 h-1 ${index < currentStep ? "bg-green-500" : "bg-gray-300"
                            }`}
                    />
                )}
            </div>
        )})}
    </div>
    )
}
export default ProcessStepper 
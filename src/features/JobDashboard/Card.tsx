import React from "react";
interface CardProps {
    job:{
        id:number,
        role:string,
        company:string,
        location:string,
        experience:string
    }
}
const Card : React.FC<CardProps>  = ({job}) => {
    return(
        <div key={job.id} className="card p-3 flex flex-col shadow-[0_0_10px_#3183f566]">
        <h3 className="text-md font-semibold mb-2">{job.role}</h3>
        <div className="text-sm text-gray-700 flex flex-col gap-1">
            <span><strong>Company:</strong> {job.company}</span>
            <span><strong>Location:</strong> {job.location}</span>
            <span><strong>Experience:</strong> {job.experience}</span>
            <div className="flex justify-center">
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 w-[50%]">
                View
            </button>
            </div>
           
        </div>
    </div>
    )
}

export default Card
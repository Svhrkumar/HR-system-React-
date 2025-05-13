import { useState ,ChangeEvent} from "react"
import { jobsData } from "../../mock"
import Card from "../features/JobDashboard/Card"


const JobsDashboard = () => {
    const [searchJob, setSearchJob] = useState<string>("")

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchJob(e.target.value)
    }
    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-center items-center w-full h-[30%] p-7">
                <input className="p-2 w-3xl rounded-sm border" type="text" placeholder="search" value={searchJob} onChange={handleSearch} />
            </div>
            <div className="grid grid-cols-4 grid-rows-4 gap-1.5 bg-white p-3">
                {jobsData
                    .filter((job) =>
                        job.role.toLowerCase().includes(searchJob.toLowerCase()) ||
                        job.company.toLowerCase().includes(searchJob.toLowerCase())
                    )
                    .map((job) => (
                      <Card job={job} />
                    ))}
            </div>
        </div>
    )
}
export default JobsDashboard
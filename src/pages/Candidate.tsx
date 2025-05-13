import { CandidateData } from "../../mock"
import Details from "../features/profile.jsx/components/Details"
import UserCard from "../features/profile.jsx/components/UserCard"

const {
    name,
    email,
    mobile,
    skill: skills,
    currComp: company,
    experience,
    position,
    currLocation,
    preferLocation
  } = CandidateData;

const CandidateProfile = () => {
    return(
        <div className='flex'>

        <div className='p-3 w-full md:w-1/4'>
          <UserCard name={name}
            email={email}
            mobile={mobile}
            company={company}
            experience={experience}
            image="https://i.pravatar.cc/100?img=5" 
            position={position}
            currLocation={currLocation}
            preferLocation={preferLocation}
            />
            
        </div>
        <div className="p-3  w-full md:w-3/4">
          <Details />
        </div>
      </div>
    )
}

export default CandidateProfile
interface UserCardProps {
    name: string;
    email: string;
    mobile: number;
    company: string;
    experience: number;
    image?: string;
    position:string,
    currLocation:string,
    preferLocation?:string
}

const UserCard: React.FC<UserCardProps> = ({
    name,
    email,
    mobile,
    company,
    experience,
    image,
    position,
    currLocation,
    preferLocation

}) => {
    return (
        <div className="rounded-lg p-3.5 shadow-[0_0_10px_#3183f566]  flex flex-col w-[100%] max-w-sm ">
            <div className="w-full flex justify-center items-center">
                <img
                    src={image || 'https://via.placeholder.com/56'}
                    alt="profile"
                    className="rounded-sm object-cover w-full h-full"
                />
            </div>

            <div className="flex flex-col p-1 mt-2 text-sm space-y-1">
                <div className="flex items-center">
                    <span className="w-24">Name:</span> <span>{name}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-24">Email:</span> <span>{email}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-24">Contact:</span> <span>{mobile}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-24">Company:</span> <span>{company}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-24">Experience:</span> <span>{experience} yrs</span>
                </div>
                <div className="flex items-center">
                    <span className="w-24">Position:</span> <span>{position} yrs</span>
                </div>
                <div className="flex items-center">
                    <span className="w-24">Current Location:</span> <span>{currLocation} yrs</span>
                </div>
                <div className="flex items-center">
                    <span className="w-24">Preferred:</span> <span>{preferLocation} yrs</span>
                </div>
               
            </div>
        </div>
    );
};

export default UserCard;

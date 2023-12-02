import { useState } from 'react'
import { CiStar } from 'react-icons/ci';
import { FaStar } from "react-icons/fa";


const EmailCard = () => {
    const [isStar, setStarState] = useState(false);
    const [read, setReadStatus] = useState(false);

    return (
        <div className={`ml-4 mt-4 mr-4 flex flex-row items-center justify-between cursor-pointer ${read ? "bg-transparent" : "bg-transparent"}`} onClick={() => setReadStatus(!read)}>
            <div className="mt-4 flex flex-row items-center">
                <input type="checkbox" className="mr-3" />
                {
                    isStar ? <FaStar onClick={() => setStarState(!isStar)} className={`mr-2 text-xl text-yellow-300`} /> : <CiStar onClick={() => setStarState(!isStar)} className={`mr-2 text-xl`} />
                }
                <h1 className="ml-1 text-md"><b>LinkedIn Job Alerts </b></h1>
            </div>
            <p className='mt-4'><b> Your job alert for software engineer - </b> 30+ new jobs in Greater Bengaluru Area match your preferences.</p>
        </div>
    )
}

export default EmailCard
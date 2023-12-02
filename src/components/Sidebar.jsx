// icons
import { BiSend } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { LuPencil, LuMails } from "react-icons/lu";
import { RiSpam2Line, RiDraftLine } from "react-icons/ri";
import { IoMdStarOutline, IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt, FaLocationArrow } from "react-icons/fa";
import { MdLabelImportantOutline, MdOutlineScheduleSend, MdExpandLess, MdInbox, MdOutlineWatchLater, MdSettings } from "react-icons/md";

const Sidebar = () => {
    return (
        <nav className="px-4 py-5 bg-[#f6f8fc]">
            <div className='flex bg-[#C2E7FF] rounded-[10px] p-3 mb-2 w-[145px] transition-transform duration-300 transform hover:scale-105'>
                <LuPencil className='text-2xl' />
                <p className="ml-4 text-md" >Compose</p>
            </div>

            <div className='w-[100%] px-6 h-[70vh] overflow-hidden hover:overflow-y-scroll'>

                <div className='mt-4 flex flex-row items-center justify-between'>
                    <div className="flex flex-row items-center">
                        <MdInbox className="mr-2 text-xl" />
                        <p className="ml-1 text-md">Inbox</p>
                    </div>
                    <p>80</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <IoMdStarOutline className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Starred</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <MdOutlineWatchLater className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Snoozed</p>
                </div>
                <div className=' my-2 flex flex-row items-center '>
                    <BiSend className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Sent</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <RiDraftLine className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Drafts</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <MdExpandLess className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Less</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <MdLabelImportantOutline className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Important</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <BsChatSquareText className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Chats</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <MdOutlineScheduleSend className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Scheduled</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <LuMails className="mr-2 text-xl" />
                    <p className="ml-1 text-md">All Mail</p>
                </div>
                <div className='my-2 flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center '>
                        <RiSpam2Line className="mr-2 text-xl" />
                        <p className="ml-1 text-md">Spam</p>
                    </div>
                    <p>6</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <FaRegTrashAlt className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Trash</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <FaLocationArrow className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Categories</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <MdSettings className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Manage Labels</p>
                </div>
                <div className='my-2 flex flex-row items-center '>
                    <IoMdAdd className="mr-2 text-xl" />
                    <p className="ml-1 text-md">Create New Label</p>
                </div>
                <div className='my-6 flex flex-row items-center justify-between'>
                    <p className="ml-1 text-md">Labels</p>
                    <IoMdAdd className="mr-2 text-xl" />
                </div>

            </div>
        </nav>

    )
}

export default Sidebar

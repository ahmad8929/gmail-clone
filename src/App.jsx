// lib
import { useState } from 'react';

// assets
import logo from './assets/logoEmail.png'

// icons
import { MdMenu, MdInbox, MdSearch, MdOutlineContactSupport, MdSettings, MdOutlineSignpost, MdOutlineRefresh, MdOutlinePeopleAlt } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { FaSortDown } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { LuTag } from "react-icons/lu";

// component 
import Sidebar from './components/Sidebar';
import EmailCard from './components/Email';

const App = () => {
  const [isOpen, setOpen] = useState(true);


  return (
    <>
      <nav className='flex w-[100vw] flex-row justify-between items-center px-4 py-3 bg-[#f6f8fc] '>
        <div className='flex flex-row items-center justify-between w-[10vw]'>
          <MdMenu className='text-2xl' onClick={() => setOpen(!isOpen)} />
          <img className='w-[7vw] h-auto' src={logo} alt="Logo" />
        </div>

        <div className='w-[60vw] p-3 rounded-full flex flex-row justify-between items-center bg-[#eaf1fb] '>
          <MdSearch className='text-2xl' />
          <input className='outline-none bg-transparent w-[100%] mx-2' type="text" placeholder='Search mail' />
          <MdOutlineSignpost className='text-2xl' />
        </div>

        <div className='w-[14vw] flex flex-row justify-between items-center text-2xl'>
          <MdOutlineContactSupport />
          <MdSettings />
          <TbGridDots />
          <div className='w-4 h-4 p-4 flex flex-row items-center justify-center bg-gray-600 text-white rounded-full shadow-md'> <p className='text-xl'>M</p>
          </div>
        </div>
      </nav>

      <div className='flex flex-row w-[100vw] h-[80vh]'>
        <div className={`w-[20vw]`}><Sidebar /></div>
        <div className="w-[80vw] m-2 bg-[#ffff]">

          {/* header email */}
          <div className='ml-4 mt-4 mb-5 flex flex-row items-center justify-between'>

            <div className='flex flex-row items-center'>
              <input type="checkbox" className="mr-3" />
              <FaSortDown className='text-sm' />
              <MdOutlineRefresh className="ml-6 mr-4 text-xl" />
              <HiOutlineDotsVertical className="mr-2 text-xl" />
            </div>

            <div className='flex flex-row items-center'>
              <p>1-50 of 180</p>
              <IoIosArrowBack className='ml-6 mr-6' />
              <IoIosArrowForward className='mr-8 ml-2' />
            </div>
          </div>

          <div className="h-[100vh]">
            {/* email sections */}
            <div className='bg-white h-[74vh]  overflow-y-scroll'>
              <div className='ml-4 mb-4 flex flex-row items-center '>
                <MdInbox className='text-xl' />
                <p className='mr-20 ml-4'>Primary</p>
                <LuTag className='' />
                <p className='mr-20 ml-4'>Promotions</p>
                <MdOutlinePeopleAlt className='text-xl' />
                <p className='mr-8 ml-4'>Social</p>
              </div>
              <div className='bg-[#F2F6FC] '>
                {
                  [...Array(16)].map((email, index) => (
                    <EmailCard key={index} />
                  ))
                }
              </div>
              <div className='mt-8 flex justify-between'>
                <p className='ml-10'>Terms · Privacy · Program Policies</p>
                <p className='mr-10'>Last account activity: 27 minutes ago</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSidebar } from "react-icons/fi";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { CgSearch } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import Modal from '../../components/Helpers/Modal'

const Dashboard = ({children}) => {
    const [sidebarSize, setSidebarSize] = useState(300);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeLink, setActiveLink] = useState(null); 

    const handleLinkClick = (link) => {
        setActiveLink(link);
      };
    

    const sideBar = () => {
        if (sidebarOpen) {
            setSidebarSize(0);
            setSidebarOpen(false);
        } else {
            setSidebarSize(300);
            setSidebarOpen(true);
        }
    }
    const insideSideBar = () => {
        if (sidebarOpen) {
            setSidebarSize(0);
            setSidebarOpen(false);
        } else {
            setSidebarSize(400);
            setSidebarOpen(true);
        }
    }

    return (
        <div className='dashboard'>
            <div className='leftContainer' style={{ width: `${sidebarSize}px` }}>
                {!sidebarOpen ? "" :
                    <div className='leftContainerContent'>

                        <div className='dropDownBox'>
                            <div className='dropDownMenu'>
                                {/* dropdown */}
                                <Modal />
                                <div>
                                    <FiSidebar className='sideBarLogo' onClick={sideBar} />
                                </div>

                            </div>

                        </div>
                        <Link 
                            onClick={() => handleLinkClick('addTask')}
                            className={`leftContainerItem addTaskButton ${activeLink === 'addTask' ? 'activeLink' : 'common'}`}
                            to="/privateRoute/dashboard/today">
                            <TbSquareRoundedPlusFilled className='leftContainerItemIcon addTaskButtonIcon' />
                            <p className='leftContainerItemHeading addTaskHeading'>Add Task</p>
                            
                        </Link>
                        <Link 
                            onClick={() => handleLinkClick('search')}
                            className={`leftContainerItem searchButton ${activeLink === 'search' ? 'activeLink' : 'common'}`} 
                            to="">
                            <CgSearch className='leftContainerItemIcon searchButtonIcon' />
                            <p className='leftContainerItemHeading searchHeading'>Search</p>
                        </Link>
                        <Link 
                            onClick={() => handleLinkClick('upcoming')}
                            className={`leftContainerItem searchButton ${activeLink === 'upcoming' ? 'activeLink' : 'common'}`}
                            to="/privateRoute/dashboard/upcoming"
                            >
                            <SlCalender className='leftContainerItemIcon searchButtonIcon' />
                            <p className='leftContainerItemHeading searchHeading'>Upcoming</p>
                        </Link>

                    </div>
                }

                <div className='resizer' style={{ left: `${sidebarSize}px` }}>

                </div>

            </div>
            <div className='rightContainer'>
                <div className='header'>
                {sidebarOpen ? "" : <FiSidebar className='insideSideBarLogo' onClick={insideSideBar} />}
                    {children}  
                </div>
                

                
            </div>
        </div>
    )
}

export default Dashboard


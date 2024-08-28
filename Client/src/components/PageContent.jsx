import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCaretDown, faDemocrat, faTrash, faBoltLightning, faChartBar, faClock, faTeletype, faAddressCard, faBiking, faSkiing, faTasks, faPenToSquare, faRefresh, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext.jsx';
import All from '../components/All.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function PageContent({ userId }) {
    const [visibleSection, setVisibleSection] = useState('All1');
    const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
    const [currentButton, setCurrentButton] = useState(null);

    const handleNavClick = (sectionId) => {

        setCurrentButton(sectionId);
        console.log(sectionId);
        setVisibleSection(sectionId);
    };

    return (
        <div className="page-content">


            <div className="content-categories">
                <div className="label-wrapper">
                    <input
                        className="nav-item forAll1"
                        name="nav"
                        type="radio"
                        id="opt-1"
                        checked={visibleSection === 'All1'}
                        onChange={() => handleNavClick('All1')}
                    />
                    <label className="category" htmlFor="opt-1">Home</label>
                </div>
                <div className="label-wrapper">
                    <input
                        className="nav-item forImportant"
                        name="nav"
                        type="radio"
                        id="opt-2"
                        checked={visibleSection === 'Important'}
                        onChange={() => handleNavClick('Important')}
                    />
                    <label className="category" htmlFor="opt-2">My Profile <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon> </label>
                </div>
             
            </div>

            <div className="tasks-wrapper" style={{ display: visibleSection === 'All1' ? 'block' : 'none' }} id="All1">
                <div className="task-wrapper long w3-animate-bottom">
                    <div className="taskKaPapa" >
                        <All></All>
                    </div>
                   
                </div>
            </div>
            <div className="tasks-wrapper" style={{ display: visibleSection === 'Important' ? 'block' : 'none' }} id="Important">
                <div className="task-wrapper long w3-animate-bottom">
                    <div className="taskKaPapa" >
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSehZ4TDxwcqAROJtoChu92bDz4CPvOr92vV8CyUCRsp9ofC2w/viewform?embedded=true" width="100%" height="1000px" frameborder="0" marginheight="0" marginwidth="0" className='googleForm'>Loading…</iframe>
                    </div>
                   
                </div>
            </div>
        </div >
    );
}

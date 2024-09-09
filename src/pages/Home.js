// import React from 'react';
// import './Home.css'; // Ensure this path is correct relative to the component

// const Home = () => {
//     return (
//         <div>
//             <div className="area"></div>
//             <nav className="main-menu">
//                 <ul>
//                     <li>
//                         <a href="https://jbfarrow.com">
//                             <i className="fa fa-home fa-2x"></i>
//                             <span className="nav-text">Community Dashboard</span>
//                         </a>
//                     </li>
//                     <li className="has-subnav">
//                         <a href="#">
//                             <i className="fa fa-globe fa-2x"></i>
//                             <span className="nav-text">Global Surveyors</span>
//                         </a>
//                     </li>
//                     <li className="has-subnav">
//                         <a href="#">
//                             <i className="fa fa-comments fa-2x"></i>
//                             <span className="nav-text">Group Hub Forums</span>
//                         </a>
//                     </li>
//                     <li className="has-subnav">
//                         <a href="#">
//                             <i className="fa fa-camera-retro fa-2x"></i>
//                             <span className="nav-text">Survey Photos</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#">
//                             <i className="fa fa-film fa-2x"></i>
//                             <span className="nav-text">Surveying Tutorials</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#">
//                             <i className="fa fa-book fa-2x"></i>
//                             <span className="nav-text">Surveying Jobs</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#">
//                             <i className="fa fa-cogs fa-2x"></i>
//                             <span className="nav-text">Tools & Resources</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#">
//                             <i className="fa fa-map-marker fa-2x"></i>
//                             <span className="nav-text">Member Map</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#">
//                             <i className="fa fa-info fa-2x"></i>
//                             <span className="nav-text">Documentation</span>
//                         </a>
//                     </li>
//                 </ul>

//                 <ul className="logout">
//                     <li>
//                         <a href="#">
//                             <i className="fa fa-power-off fa-2x"></i>
//                             <span className="nav-text">Logout</span>
//                         </a>
//                     </li>
//                 </ul>

//             </nav>
//             <h1>Dashboard</h1>
//         </div>
//     );
// }

// export default Home;
import React from 'react';
import './Home.css'; // Ensure this path is correct relative to the component
import { SidebarData } from "../Data/Data";

const Home = () => {
    return (
        <div>
            <div className="area"></div>
            <nav className="main-menu">
                <ul>
                    {SidebarData.map((item, index) => (
                        <li key={index}>
                            <a href="#">
                                <i className="icon">
                                    <item.icon />
                                </i>
                                <span className="nav-text">{item.heading}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="logout">
                    <li>
                        <a href="#">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Home;

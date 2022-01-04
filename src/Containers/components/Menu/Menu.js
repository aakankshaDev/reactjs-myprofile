import { Route,BrowserRouter } from 'react-router-dom';
import Content from '../../Content/Content'
import Courses from '../Courses/Courses';
import Footer from '../../Footer/Footer';
import './Menu.css';
export default function Menu(){
    const handleMenu=()=>{
        console.log("Experience")
    }
    // const handleSkills=()=>{
        
    // }
    // const handleExperience=()=>{
        
    // }
    return(
        <nav class="nav">
            <ul className="menu-header">
            <li className="menu-list" onClick={handleMenu}>Experience
                {/* : 5+ years of experience in IT industry */}
                </li>
            <li className="menu-list">Skills
                {/* : Frontend(React) */}
                </li>
            <li className="menu-list">Education
                {/* : MTech in Software Engineering from Bits Pilani */}
                </li>
        </ul>
        </nav>
        // <BrowserRouter>
        //     <Route path="/" component={Content}></Route>
        //     {/* <Route path="/skills" component={Courses}></Route> */}
        //     <Route path="/education" component={Footer}></Route>
        // </BrowserRouter>
        
    );
}
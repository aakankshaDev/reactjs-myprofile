import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './Header.css';
import Menu from '../components/Menu/Menu';

export default class Header extends Component{
    
   render(){
    return(
        <div className="header">
            
            
            <h2>Experience</h2>
            <p>Senior Web Developer(UI) with 5+ years of experience and a flair for creating elegant solutions in developing user interface
                in the least amount of time. Developed security web application for my current organization.Dynamic, resourceful and extremely
                driven with deep passion for creating and delivering programs and solutions that empower a team, company and client to meet and exceed
                desired expectations.
            </p>
            {/* <h5 onClick={()=>{this.setState({line:'Clicked the header and updated it'})}}>{this.state.line}</h5> */}
        </div>
    );
   }
}
    

    
import React, {Component} from 'react';
import './CourseDetails.css';
export default class CourseDetails extends Component{
    render(){
        return(
            <div className="details">
                {this.props.value}
            </div>
        );

    }
}
import CourseDetails from "./CourseDetails/CourseDetails";
import './Courses.css';
export default function Courses(){
    const course={
        name: ['ReactJS','ES6','JavaScript','HTML5','CSS3','Material-UI','Apache(lounge)'],
        // url:['www.google.com']
        // ref: ''
    }
    // courseList=(name,i)=>{
    //     course.name
    // }
    // course.name.map(courseList=()=>{})
    return(<div id="courses">
        <h2>Skills</h2>
        {/* <div> */}
        <CourseDetails value={course.name[0]} />
        <CourseDetails value={course.name[1]} />
        <CourseDetails value={course.name[2]} />
        <CourseDetails value={course.name[3]} />
        <br/>
        <CourseDetails value={course.name[4]} />
        <CourseDetails value={course.name[5]} />
        <CourseDetails value={course.name[6]} />
        {/* </div> */}
    </div>);
}
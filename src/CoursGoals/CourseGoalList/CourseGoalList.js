import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css'
const CourseGoalList = (props) => {
    return (

        <ul className="goal-list">
            {props.items.map(i => (
               <CourseGoalItem key ={i.id}>{i.text}</CourseGoalItem>
           ))} 
           
           </ul>
    );
};
export default CourseGoalList;


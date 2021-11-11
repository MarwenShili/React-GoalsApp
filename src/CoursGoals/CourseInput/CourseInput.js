import  { useState } from "react";
import './CoursInput.css';
import Button from "../../UI/Button";
const CourseInput = (props) => {
    const [isValid, setIsvalid] = useState(true);
    const [enteredData , setEnteredData] = useState('');

   const  goalInputChangeHandler =(event) =>{
       if(event.target.value.trim() > 0){
           setIsvalid(true);
       }
       setEnteredData(event.target.value);
   };
   const formSubmitHandler =(event) =>{
    event.preventDefault();
    if (enteredData.trim().length === 0){
        setIsvalid(false);
        return;
    }
   props.addGoal(enteredData);
   //console.log(enteredData);
   };

    return (
        <form onSubmit={formSubmitHandler}>
            <div  className={`form-control ${!isValid ? "invalid" : ""}`}>
                <label>Cours Goal</label>
                <input   type="text" onChange={goalInputChangeHandler}></input>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
};
export default CourseInput ;
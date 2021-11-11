import './App.css';
import { useState } from 'react';
import CourseInput from './CoursGoals/CourseInput/CourseInput';
import CourseGoalList from './CoursGoals/CourseGoalList/CourseGoalList';

function App() {
  const [courseGoals, setCourseGoals] =useState([
   {text:"book1", id:1},
   { text: 'Do all exercises!', id: 'g1' },
   { text: 'Finish the course!', id: 'g2' }

   
  ]);
  const goalHandler = (enteredGoals) => {
    setCourseGoals( (prevGoals) => {
      const allData =[...prevGoals];
      allData.unshift({text:enteredGoals , id: Math.random().toString()});
      return allData;
     // console.log(allData);
    });
  }
  //console.log(courseGoals);



  let content = ( <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>)

  if(courseGoals.length > 0){
    content =(
      <CourseGoalList items={courseGoals}></CourseGoalList>
    );
  }



  return (
    <div>
    <section id="goal-form">
        <CourseInput addGoal={goalHandler} />
    </section>
     <section id="goals">
        {content}
    </section>
    </div>
  );
}

export default App;

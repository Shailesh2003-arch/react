import React from 'react'

function Student(props) {
     return (
     <div>
       <h2>Student Name : {props.name}</h2>
       <h2>Student Age : {props.age}</h2>
     </div>
   )
}

export default Student

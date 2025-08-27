//propTypes = A mechanism that ensures that he 
// passed value is of the correct datatype.
// age: PropTypes : number

import PropTypes from "prop-types"

function Student({name = "Guest", age = 0, isStudent = false}){
  return(
    <div className="Student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student
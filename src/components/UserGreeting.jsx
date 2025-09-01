import PropTypes, { string } from "prop-types"

function UserGreeting({username="Guest", isLoggedIn=false}){
  
  if(isLoggedIn){
    return <h2 className="welcome-message">Welcome {username}</h2>
  }
    return <h2 className="login-prompt">Please log in to continue</h2>



}

UserGreeting.propTypes = {
  username : PropTypes.string,
  isLoggedIn : PropTypes.bool
}

export default UserGreeting
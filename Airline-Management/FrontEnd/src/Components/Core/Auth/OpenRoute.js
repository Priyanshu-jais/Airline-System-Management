
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth)
 
  // const {user} = useSelector((state) => state.profile);
  // console.log("profile", user.accountType)

  if (token === null) {
    return children
  } else {
    return <Navigate to="/dashboard"/>
  }
}

export default OpenRoute;
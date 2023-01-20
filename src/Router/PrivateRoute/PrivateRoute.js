import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";


// This is privateRoute fun

const PrivateRoute = ({children}) =>{
    const {users, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }

    if(!users){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    if(!users){
        return <Navigate to="/register" state={{from: location}} replace></Navigate>
    }
    return children;
}

export default PrivateRoute;
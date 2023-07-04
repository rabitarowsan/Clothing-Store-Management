import {Redirect, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (component: Component, ...rest) => {
    return(
        <Route
            {...rest}
            render = {
                (props) => {
                localStorage.getItem("authtoken") ?(
                    <component {...props} />
                ) : (
                    <Navigate to = "/login" />
                );
                
            }}
        />
    );
};

export default PrivateRoute
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => !!state.auth.uid);
    return (
        <div>
            <Route {...rest} component={(props) => {
                if (isAuthenticated) {
                    return (
                        <Redirect to="/dashboard" />
                    )
                } else {
                    return (
                        <Component {...props} />
                    )
                }
            }} />
        </div>
    );
}

export default PublicRoute;

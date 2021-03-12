import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => !!state.auth.uid);
    return (
        <div>
            <Route {...rest} component={(props) => {
                if (isAuthenticated) {
                    return (
                        <div>
                            <Header />
                            <Component {...props} />
                        </div>
                    )
                } else {
                    return (
                        <Redirect to="/" />
                    )
                }
            }} />
        </div>
    );
}

export default PrivateRoute;

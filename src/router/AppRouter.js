import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NotFoundPage from "../pages/NotFoundPage/index"
import DashboardPage from "../pages/DashboardPage/index"
import Header from "../components/Header/index"
import Footer from '../components/Footer';
import "./AppRouter.scss"
import TestPage from '../pages/TestPage';


export const history = createBrowserHistory();

const CustomRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => {
            return (
                <div className="approuter-wrapper">
                    <div className="approuter-header-section">
                        <Header />
                    </div>
                    <div className="approuter-body-section">
                        <Component {...props} />
                    </div>
                    <div className="approuter-footer-section">
                        <Footer />
                    </div>
                </div>
            )
        }}>

        </Route>
    )
}
const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <CustomRoute
                path="/"
                component={DashboardPage}
                exact={true}
            />
            <CustomRoute
                path="/test/:id"
                component={TestPage}

            />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;

import React from 'react'
import {Router, Switch, Route} from 'react-router'
import Layout from './components/layout/layout'
import {createBrowserHistory} from 'history'
import DetailsPage from './pages/details'
import MapPage from './pages/map'
import NotFound from './pages/not-found'

const history = createBrowserHistory();

const AppLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        )} />
    )
};

const AppRouter = () => {
    return <Router history={history} >
        <Switch>
            <AppLayoutRoute path='/' exact layout="Layout" component={MapPage}/>
            <AppLayoutRoute path='/region/:region' exact layout="Layout" component={MapPage}/>
            <AppLayoutRoute path='/country/:country' exact layout="Layout" component={DetailsPage}/>
            <AppLayoutRoute path='/404' layout="Layout" component={NotFound}/>
            <AppLayoutRoute layout="Layout" component={NotFound}/>
        </Switch>
    </Router>
}

export default AppRouter
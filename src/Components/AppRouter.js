import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Main from '../Route/Main'
import AIBoard from '../Route/AIBoard'
import Write from '../Route/Write'
import Detail from '../Route/Detail'

const AppRouter = () => {
    return(
        <Router>
            <Route>
                <Header/>

                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/get_board/:bno" component={Detail} />
                    <Route exact path="/aiboard/:page" component={AIBoard} />
                    <Route exact path="/write" component={Write} />

                    <Redirect to="/" />
                </Switch>

                <Footer/>
            </Route>
        </Router>
    )
}

export default AppRouter
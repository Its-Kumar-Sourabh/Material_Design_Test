import React, { Component } from 'react';
import { Router, Route, hasHistory } from 'react-router';
import About from './about';
import Contacts from './Contacts';

export default class routerApp extends components {
    render() {
        return (
            <div>
                <Router history={hasHistory}>
                    <Route path="/" component={Home} >
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/about" component={About} />
                    </Route>
                </Router>
            </div>
        );
    }
}
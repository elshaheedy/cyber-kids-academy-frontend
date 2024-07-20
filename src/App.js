import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Quizzes from './components/Quizzes';
import Games from './components/Games';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" component={Courses} />
                <Route path="/quizzes" component={Quizzes} />
                <Route path="/games" component={Games} />
                <Route path="/login" component={Login} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

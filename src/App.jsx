import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footerf from './components/Footerf'
import Headerf from './components/Headerf'
import Home from './pages/Home';
import Fit from './pages/Fit';
import Recommandation from './pages/Recommandation';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Pamela from './pages/Pamela';
import Chat from './pages/Chat';
const App = () => {
    const [headerKey, setHeaderKey] = useState(0);

    const restartHeader = () => {
      setHeaderKey(prevKey => prevKey + 1);
    };

  return (
    <Router>
        <div className='App'>
            <Headerf key={headerKey}/>
            <div className="container w-screen">
                <Switch>
                    <Route exact path='/'>
                        <Home restartHeader={restartHeader} />
                    </Route>
                    <Route exact path='/chat'>
                        <Chat/>
                    </Route>
                    <Route exact path='/recommandation'>
                        <Recommandation/>
                    </Route>
                    <Route exact path='/aboutme'>
                        <About/>
                    </Route>
                    <Route exact path='/login'>
                        <Login/>
                    </Route>
                    <Route exact path='/register'>
                        <Register/>
                    </Route>
                    <Route exact path='/pamela'>
                        <Pamela/>
                    </Route>
                    <Route exact path='/fit'>
                        <Fit/>
                    </Route>
                </Switch>
            </div>
            <Footerf/>
        </div>
    </Router>
  )
}

export default App
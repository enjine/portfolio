import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import About from './pages/About'
import Resumes from './pages/Resumes'
import Portfolios from './pages/Portfolios'
import Contact from './pages/Contact'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experience" component={Resumes} />
      <Route path="/projects" component={Portfolios} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App

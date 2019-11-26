import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './pages/index'
import Main from './pages/main'
import registerClient from './pages/register'
import process from './pages/console/process'
import ConsolePage from './pages/console/index'
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/main" exact component={Main} />
      <Route path="/register" exact component={registerClient} />
      <Route path="/console" exact component={ConsolePage} />
      <Route path="/console/process" exact component={process} />
    </BrowserRouter>
  )
}

export default App

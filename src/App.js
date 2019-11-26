import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './pages/index'
import Main from './pages/main'
import ConsolePage from './pages/console/index'
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/main" exact component={Main} />
      <Route path="/console" exact component={ConsolePage} />
    </BrowserRouter>
  )
}

export default App

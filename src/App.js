import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './pages/index'
import Main from './pages/main'
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/main" exact component={Main} />
    </BrowserRouter>
  )
}

export default App

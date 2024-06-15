import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
          <Route path='/' element={<News key="general" pageSize={6} category="general" />} />
            <Route path='/business' element={<News key="business" pageSize={6} category="business" />} />
            <Route path='/entertainment' element={<News key="entertainment" pageSize={6} category="entertainment" />} />
            <Route path='/general' element={<News key="general" pageSize={6} category="general" />} />
            <Route path='/health' element={<News key="health" pageSize={6} category="health" />} />
            <Route path='/science' element={<News key="science" pageSize={6} category="science" />} />
            <Route path='/sports' element={<News key="sports" pageSize={6} category="sports" />} />
            <Route path='/technology' element={<News key="technology" pageSize={6} category="technology" />} />
          </Routes>

        </div>
      </BrowserRouter>

    )
  }
}

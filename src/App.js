import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    let pageSize = 12;
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
          <Route path='/' element={<News key="general" pageSize={pageSize} category="general" />} />
            <Route path='/business' element={<News key="business" pageSize={pageSize} category="business" />} />
            <Route path='/entertainment' element={<News key="entertainment" pageSize={pageSize} category="entertainment" />} />
            <Route path='/general' element={<News key="general" pageSize={pageSize} category="general" />} />
            <Route path='/health' element={<News key="health" pageSize={pageSize} category="health" />} />
            <Route path='/science' element={<News key="science" pageSize={pageSize} category="science" />} />
            <Route path='/sports' element={<News key="sports" pageSize={pageSize} category="sports" />} />
            <Route path='/technology' element={<News key="technology" pageSize={pageSize} category="technology" />} />
          </Routes>

        </div>
      </BrowserRouter>

    )
  }
}

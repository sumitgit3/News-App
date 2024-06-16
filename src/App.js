import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_APP_API_KEY;
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:`${progress}`})
  }
  render() {
    let pageSize = 12;
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key="general" pageSize={pageSize} category="general" />} />
            <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={pageSize} category="business" />} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={pageSize} category="entertainment" />} />
            <Route path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={pageSize} category="general" />} />
            <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={pageSize} category="health" />} />
            <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={pageSize} category="science" />} />
            <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={pageSize} category="sports" />} />
            <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={pageSize} category="technology" />} />
          </Routes>

        </div>
      </BrowserRouter>

    )
  }
}

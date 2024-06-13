import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
  render() {
    return (
      <>
        <h2 className='text-center'>HackerNews-Headlines</h2>
        <div className='row mx-5 my-3'>
          <div className='col-md-4'>
              <NewsItem/>
          </div>
          <div className='col-md-4'>
              <NewsItem/>
          </div>
          <div className='col-md-4'>
              <NewsItem/>
          </div>
        </div>
      </>
    )
  }
}

import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
  render() {
    return (
      <div>
        This is news Component
        <NewsItem itemNumber={5}/>
      </div>
    )
  }
}

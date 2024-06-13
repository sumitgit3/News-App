import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <div>
        this is item {this.props.itemNumber}
      </div>
    )
  }
}
